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
import 'react-datepicker/dist/react-datepicker.css';
import Layout from 'components/Layout';
import {
  InputError,
  StyledForm as Form,
  StyledInput,
  StyledButton as Button,
} from 'components/Form/Form.style';
import {
  FormSectionWrapper,
  StyledHeading,
} from 'components/Reservation/Reservation.style';
import * as Yup from 'yup';
import { OPENING_MUSEUM_HOUR, CLOSING_MUSEUM_HOUR } from 'utils/constants';
import convertDate from 'helpers/convertDate';
import 'yup-phone';
import {
  getFirestore,
  getDocs,
  doc,
  addDoc,
  setDoc,
  collection,
  Timestamp,
} from 'firebase/firestore/lite';
import axios from 'axios';
import firebaseApp from '../../firebase';

type InputProps = {
  type: 'text' | 'number' | 'tel' | 'date';
  min?: string;
  max?: string;
  name: string;
  innerRef?: any;
  placeholder?: string;
  autocomplete?: string;
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
  // eslint-disable-next-line no-unused-vars
  filterDate: (day: Date) => boolean;
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
  const [allReservations, setAllReservations] = useState<
    { bookedPeopleAmount: number; date: string }[] | []
  >([]);
  const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
  const [isSubmittedPersonalData, setIsSubmittedPersonalData] = useState(false);
  const [isReservationEnded, setReservationEnded] = useState(false);
  const [formData, setFormData] = useState(formInitialValues);
  const [verificationId, setVerificationId] = useState('');
  const dateFromFirebase = Timestamp.now().toDate();
  const minDate = dayjs(dateFromFirebase).add(2, 'day').toDate();
  const maxDate = dayjs(dateFromFirebase).add(60, 'day').toDate();

  const getReservationDates = async () => {
    try {
      await signInAnonymously(auth);
      const reservationsQuery = await getDocs(
        collection(db, 'reservation-dates')
      );
      reservationsQuery.forEach((reservationFromDb) => {
        const reservationDate = dayjs(
          reservationFromDb.data().date.seconds * 1000
        ).toString();

        setAllReservations((prevDates) => {
          const sameDateOfReservationIndex = prevDates.findIndex(
            ({ date }) => date === reservationDate
          );
          if (sameDateOfReservationIndex === -1)
            return [
              ...prevDates,
              {
                date: reservationDate,
                bookedPeopleAmount: reservationFromDb.data().peopleAmount,
              },
            ];
          return [
            ...prevDates.slice(0, sameDateOfReservationIndex),
            {
              ...prevDates[sameDateOfReservationIndex],
              bookedPeopleAmount:
                prevDates[sameDateOfReservationIndex].bookedPeopleAmount +
                reservationFromDb.data().peopleAmount,
            },
            ...prevDates.slice(sameDateOfReservationIndex + 1),
          ];
        });
      });
    } catch {
      setFormErrorMessage('Coś poszło nie tak :(');
    }
  };

  useEffect(() => {
    setBlockedDaysInCalendar(() => {
      const blockedDays = allReservations.filter(
        ({ bookedPeopleAmount }) =>
          bookedPeopleAmount + formData.adultAmount + formData.childrenAmount >
          16
      );
      return blockedDays.map(({ date }) => date);
    });
  }, [allReservations, formData.adultAmount, formData.childrenAmount]);

  const filterPassedTime = (time: Date) => {
    const selectedDate = dayjs(time).toString();
    return !blockedDaysInCalendar.includes(selectedDate);
  };

  const filterPassedDay = (day: Date) => {
    const isWeekday = day.getDay() !== 0 && day.getDay() !== 6;
    return !isWeekday && day > minDate;
  };

  const handleSubmit = async (formValues: typeof formInitialValues) => {
    try {
      setFormData(formValues);
      setAllReservations([]);
      setFormErrorMessage(null);
      if (formValues.adultAmount + formValues.childrenAmount > 16) {
        setFormErrorMessage('Maksymalna liczba osób może wynosić 16');
      } else {
        const phoneNumber = formValues.phoneNumber.replace(/ /g, '');
        const ajustedPhoneNumber =
          phoneNumber.length === 9 ? `+48${phoneNumber}` : phoneNumber;
        await getReservationDates();
        const appVerifier = new RecaptchaVerifier(
          'recaptcha-container',
          {
            size: 'invisible',
          },
          auth
        );
        signInWithPhoneNumber(auth, ajustedPhoneNumber, appVerifier)
          .then((result) => {
            setIsSubmittedPersonalData(true);
            setVerificationId(result.verificationId);
          })
          .catch(() => setFormErrorMessage('Coś poszło nie tak :('));
      }
    } catch {
      setFormErrorMessage('Coś poszło nie tak :(');
    }
  };

  const isDateisValid = (date: Date) => {
    setFormErrorMessage(null);
    if (blockedDaysInCalendar.includes(dayjs(date).toString())) {
      setFormErrorMessage('Wybrano zarezerwowany już termin!');
      return false;
    }
    if (date.getMinutes() !== 0) {
      setFormErrorMessage('Godzina rezerwacja musi być równa np. 12:00');
      return false;
    }
    if (
      date.getHours() < OPENING_MUSEUM_HOUR ||
      date.getHours() > CLOSING_MUSEUM_HOUR
    ) {
      setFormErrorMessage('Godzina rezerwacji musi być w godzinach otwarcia');
      return false;
    }
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      setFormErrorMessage('Termin rezerwacji musi być sobotą lub niedzielą');
      return false;
    }
    if (date <= minDate) {
      setFormErrorMessage(
        'Termin rezerwacji może być wybrany najpóźniej 48h przed czasem'
      );
      return false;
    }
    return true;
  };

  if (isSubmittedPersonalData && !isReservationEnded) {
    return (
      <Layout>
        <FormSectionWrapper>
          <>
            <Formik
              key='auth-form'
              initialValues={{ phoneAuthCode: '', date: new Date() }}
              validationSchema={Yup.object({
                phoneAuthCode: Yup.string().required('Wymagane'),
                date: Yup.date().required('Wymagane'),
              })}
              onSubmit={({ phoneAuthCode, date }) => {
                if (isDateisValid(date)) {
                  setFormData((prevState) => ({ ...prevState, date }));
                  const credential = PhoneAuthProvider.credential(
                    verificationId,
                    phoneAuthCode
                  );
                  signInWithCredential(auth, credential)
                    .then(async () => {
                      try {
                        const ref = await addDoc(
                          collection(db, 'reservation-dates'),
                          {
                            date,
                            peopleAmount:
                              formData.childrenAmount + formData.adultAmount,
                          }
                        );
                        await setDoc(doc(db, 'reservations', `${ref.id}`), {
                          ...formData,
                          time: `${date.getHours()}:${
                            date.getMinutes() === 0 ? `00` : date.getMinutes()
                          }`,
                          date: convertDate(date),
                        });
                        auth.currentUser?.getIdToken(true).then((token) =>
                          axios
                            .post('/api/reservation', {
                              token,
                              id: ref.id,
                              ...formData,
                              date,
                            })
                            .then(() => setReservationEnded(true))
                            .catch(() =>
                              setFormErrorMessage('Coś poszło nie tak :(')
                            )
                        );
                      } catch {
                        setFormErrorMessage('Coś poszło nie tak :(');
                      }
                    })
                    .catch(() => setFormErrorMessage('Zły kod weryfikacji'));
                }
              }}
            >
              <Form>
                <label htmlFor='date'>Data</label>
                <DatePickerField
                  name='date'
                  filterTime={filterPassedTime}
                  filterDate={filterPassedDay}
                  minDate={minDate}
                  maxDate={maxDate}
                />
                <label htmlFor='phoneAuthCode'>Kod weryfikacji SMS</label>
                <Input
                  type='text'
                  name='phoneAuthCode'
                  autocomplete='one-time-code'
                />
                {formErrorMessage ? (
                  <FormError>{formErrorMessage}</FormError>
                ) : null}
                <Button type='submit'>Rezerwuj</Button>
              </Form>
            </Formik>
          </>
        </FormSectionWrapper>
      </Layout>
    );
  }

  if (isReservationEnded) {
    return (
      <Layout>
        <FormSectionWrapper>
          <StyledHeading>
            🎉 Udało się zarezerwować termin{' '}
            {dayjs(formData.date).format('DD/MM/YYYY HH:mm')} 🎉
          </StyledHeading>
          <StyledHeading>
            Rezerwacja online nie jest biletem, umożliwia jedynie zakup biletu
            minimum 20 minut przed planowaną godziną wejścia. Po upływie tego
            czasu rezerwacja jest anulowana i wolne miejsca są kierowane do
            sprzedaży.
          </StyledHeading>
        </FormSectionWrapper>
      </Layout>
    );
  }
  return (
    <Layout>
      <FormSectionWrapper>
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
              .max(15, 'Maksymalna liczba osób dorosłych to 15')
              .required('Wymagane'),
            childrenAmount: Yup.number()
              .min(0, 'Liczba dzieci nie może być mniejsza od 0')
              .max(15, 'Maksymalna liczba dzieci to 15')
              .required('Wymagane'),
          })}
          onSubmit={handleSubmit}
        >
          <Form>
            <label htmlFor='name'>Imię</label>
            <Input type='text' name='name' />
            <label htmlFor='lastname'>Nazwisko</label>
            <Input type='text' name='lastname' />
            <label htmlFor='phoneNumber'>Numer telefonu</label>
            <Input type='tel' name='phoneNumber' />
            <label htmlFor='email'>e-mail</label>
            <Input type='text' name='email' />
            <label htmlFor='adultAmount'>Liczba osób dorosłych</label>
            <Input type='number' name='adultAmount' min='1' max='15' />
            <label htmlFor='childrenAmount'>Liczba dzieci</label>
            <Input type='number' name='childrenAmount' min='0' max='15' />
            {formErrorMessage ? (
              <FormError>{formErrorMessage}</FormError>
            ) : null}
            <div id='recaptcha-container' />
            <Button id='reservation-submit' type='submit'>
              Dalej
            </Button>
          </Form>
        </Formik>
      </FormSectionWrapper>
    </Layout>
  );
};
export default ReservationPage;
