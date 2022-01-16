import type { NextPage } from 'next';
import { useEffect, useState, forwardRef } from 'react';
import { Formik, useField, useFormikContext } from 'formik';
import styled from 'styled-components';
import {
  getAuth,
  signInAnonymously,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithCredential,
  PhoneAuthProvider,
} from 'firebase/auth';
import DatePicker from 'react-datepicker';
import pl from 'date-fns/locale/pl';
import dayjs from 'dayjs';
import { OPENING_MUSEUM_HOUR, CLOSING_MUSEUM_HOUR } from 'utils/constants';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from 'components/Layout';
import {
  InputError,
  StyledForm as Form,
  StyledInput,
  StyledButton as Button,
} from 'components/Form/Form.style';
import {
  Wrapper,
  StyledHeading,
} from 'components/Reservation/Reservation.style';
import * as Yup from 'yup';
import 'yup-phone';
import {
  getFirestore,
  getDocs,
  addDoc,
  collection,
  Timestamp,
} from 'firebase/firestore/lite';
import firebaseApp from '../../firebase';

type InputProps = {
  type: 'text' | 'number' | 'tel' | 'date';
  min?: string;
  max?: string;
  name: string;
  innerRef?: any;
  placeholder: string;
};

const Input = ({ ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <StyledInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </>
  );
};

Input.defaultProps = {
  min: undefined,
  max: undefined,
  innerRef: undefined,
};

type DatePickerProps = {
  name: string;
  minDate: Date;
  maxDate: Date;
  // eslint-disable-next-line no-unused-vars
  filterTime: (time: Date) => boolean;
};

const DatePickerInput = forwardRef((props, ref) => (
  <Input innerRef={ref} type='text' name='date' placeholder='Data' {...props} />
));

const DatePickerField = ({ ...props }: DatePickerProps) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      customInput={<DatePickerInput />}
      timeCaption='Czas'
      timeIntervals={60}
      dateFormat='Pp'
      minTime={dayjs().hour(OPENING_MUSEUM_HOUR).minute(0).second(0).toDate()}
      maxTime={dayjs().hour(CLOSING_MUSEUM_HOUR).minute(0).second(0).toDate()}
      locale={pl}
      showTimeSelect
      onChange={(value) => {
        setFieldValue(field.name, value);
      }}
    />
  );
};

const formInitialValues = {
  name: '',
  lastname: '',
  phoneNumber: '',
  email: '',
  adultAmount: 1,
  childrenAmount: 0,
  date: new Date(),
};

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const FormError = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

const ReservationPage: NextPage = () => {
  const [blockedDaysInCalendar, setBlockedDaysInCalendar] = useState<string[]>(
    []
  );
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [isReservationEnded, setReservationEnded] = useState(false);
  const [formData, setFormData] = useState(formInitialValues);
  const [verificationId, setVerificationId] = useState('');
  const dateFromFirebase = Timestamp.now().toDate();
  const minDate = dayjs(dateFromFirebase).add(1, 'day').toDate();
  const maxDate = dayjs(dateFromFirebase).add(60, 'day').toDate();

  const setDaysInCalendar = async () => {
    try {
      await signInAnonymously(auth);
      const reservations = await getDocs(collection(db, 'reservations'));
      reservations.forEach((reservation) => {
        const date = dayjs(reservation.data().date.seconds * 1000).toString();
        setBlockedDaysInCalendar((prevDates) => [...prevDates, date]);
      });
    } catch (err) {
      console.log(err);
      setFormErrorMessage('Coś poszło nie tak :(');
    }
  };

  const filterPassedTime = (time: Date) => {
    const selectedDate = dayjs(time).toString();
    return !blockedDaysInCalendar.includes(selectedDate);
  };

  const handleSubmit = (formValues: typeof formInitialValues) => {
    setFormData(formValues);
    const phoneNumber = formValues.phoneNumber.replace(/ /g, '');
    const ajustedPhoneNumber =
      phoneNumber.length === 9 ? `+48${phoneNumber}` : phoneNumber;
    if (blockedDaysInCalendar.includes(dayjs(formValues.date).toString())) {
      setFormErrorMessage('Wybrano zarezerwowany już termin!');
      return;
    }
    if (formValues.date.getMinutes() !== 0) {
      setFormErrorMessage('Godzina rezerwacja musi być równa np. 12:00');
      return;
    }
    if (
      formValues.date.getHours() < OPENING_MUSEUM_HOUR ||
      formValues.date.getHours() > CLOSING_MUSEUM_HOUR
    ) {
      setFormErrorMessage('Godzina rezerwacji musi być w godzinach otwarcia');
      return;
    }
    setFormErrorMessage(null);
    const appVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
      },
      auth
    );
    signInWithPhoneNumber(auth, ajustedPhoneNumber, appVerifier)
      .then((result) => {
        setSubmitted(true);
        setVerificationId(result.verificationId);
      })
      .catch(() => setFormErrorMessage('Coś poszło nie tak :('));
  };

  useEffect(() => {
    setDaysInCalendar();
  }, []);

  if (isSubmitted && !isReservationEnded) {
    return (
      <Layout>
        <Wrapper>
          <>
            <StyledHeading>
              Podaj kod wysłany na podany numer telefonu
            </StyledHeading>
            <Formik
              key='auth-form'
              initialValues={{ phoneAuthCode: '' }}
              validationSchema={Yup.object({
                phoneAuthCode: Yup.string().required('Wymagane'),
              })}
              onSubmit={({ phoneAuthCode }) => {
                const credential = PhoneAuthProvider.credential(
                  verificationId,
                  phoneAuthCode
                );
                signInWithCredential(auth, credential)
                  .then(async () => {
                    try {
                      const ref = await addDoc(collection(db, 'reservations'), {
                        date: formData.date,
                      });
                      await addDoc(
                        collection(db, `reservations/${ref.id}/private/`),
                        formData
                      );
                      setReservationEnded(true);
                    } catch {
                      setFormErrorMessage('Coś poszło nie tak :(');
                    }
                  })
                  .catch(() => setFormErrorMessage('Zły kod weryfikacji'));
              }}
            >
              <Form>
                <label htmlFor='phoneAuthCode'>Kod weryfikacji</label>
                <Input
                  type='text'
                  name='phoneAuthCode'
                  placeholder='Kod weryfikacji'
                />
                {formErrorMessage ? (
                  <FormError>{formErrorMessage}</FormError>
                ) : null}
                <Button type='submit'>Rezerwuj</Button>
              </Form>
            </Formik>
          </>
        </Wrapper>
      </Layout>
    );
  }

  if (isReservationEnded) {
    return (
      <Layout>
        <Wrapper>
          <StyledHeading>
            🎉 Udało się zarezerwować termin{' '}
            {dayjs(formData.date).format('DD/MM/YYYY HH:mm')} 🎉
          </StyledHeading>
          <StyledHeading>Nie zapomnij być 15 minut wcześniej</StyledHeading>
        </Wrapper>
      </Layout>
    );
  }

  return (
    <Layout>
      <Wrapper>
        <>
          <StyledHeading>Zarezerwuj termin już teraz!</StyledHeading>
          <Formik
            key='reservation-form'
            initialValues={formInitialValues}
            validationSchema={Yup.object({
              name: Yup.string()
                .min(3, 'Imię musi zawierać przynajmniej 3 znaki')
                .max(15, 'Imię nie może być dłuższe od 15 znaków')
                .required('Wymagane'),
              lastname: Yup.string()
                .min(3, 'Nazwisko musi zawierać przynajmniej 3 znaki')
                .max(15, 'Nazwisko nie może być dłuższe od 15 znaków')
                .required('Wymagane'),
              phoneNumber: Yup.string()
                .phone('PL', true, 'Niepoprawny numer telefonu')
                .required('Wymagane'),
              email: Yup.string()
                .email('Nieprawidłowy email')
                .required('Wymagane'),
              adultAmount: Yup.number()
                .min(1, 'Minimalna liczba osób dorosłych to 1')
                .max(20, 'Maksymalna liczba osób dorosłych to 20')
                .required('Wymagane'),
              childrenAmount: Yup.number()
                .min(0, 'Liczba dzieci nie może być mniejsza od 0')
                .max(20, 'Maksymalna liczba dzieci to 20')
                .required('Wymagane'),
              date: Yup.date()
                .min(minDate, 'Wybierz późniejszą datę')
                .max(maxDate, 'Wybierz wcześniejszą datę')
                .required('Wymagane'),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <label htmlFor='name'>Imię</label>
              <Input type='text' name='name' placeholder='Imię' />
              <label htmlFor='lastname'>Nazwisko</label>
              <Input type='text' name='lastname' placeholder='Nazwisko' />
              <label htmlFor='phoneNumber'>Numer telefonu</label>
              <Input
                type='tel'
                name='phoneNumber'
                placeholder='Numer telefonu'
              />
              <label htmlFor='email'>e-mail</label>
              <Input type='text' name='email' placeholder='e-mail' />
              <label htmlFor='adultAmount'>Liczba osób dorosłych</label>
              <Input
                type='number'
                name='adultAmount'
                min='1'
                max='20'
                placeholder='Liczba osób dorosłych'
              />
              <label htmlFor='childrenAmount'>Liczba dzieci</label>
              <Input
                type='number'
                name='childrenAmount'
                min='0'
                max='20'
                placeholder='Liczba dzieci'
              />
              <label htmlFor='date'>Data</label>
              <DatePickerField
                name='date'
                filterTime={filterPassedTime}
                minDate={minDate}
                maxDate={maxDate}
              />
              {formErrorMessage ? (
                <FormError>{formErrorMessage}</FormError>
              ) : null}
              <div id='recaptcha-container' />
              <Button id='reservation-submit' type='submit'>
                Rezerwuj
              </Button>
            </Form>
          </Formik>
        </>
      </Wrapper>
    </Layout>
  );
};
export default ReservationPage;
