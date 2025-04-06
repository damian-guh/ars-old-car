import type { NextPage } from 'next';
// import { useEffect, useState, forwardRef } from 'react';
// import { Formik, useField, useFormikContext } from 'formik';
// import styled from 'styled-components';
// import {
//   getAuth,
//   signInAnonymously,
//   RecaptchaVerifier,
//   signInWithPhoneNumber,
//   signInWithCredential,
//   PhoneAuthProvider,
// } from 'firebase/auth';
// import DatePicker from 'react-datepicker';
// import pl from 'date-fns/locale/pl';
// import dayjs from 'dayjs';
// import 'react-datepicker/dist/react-datepicker.css';
import Layout from 'components/Layout';
// import {
//   InputError,
//   StyledForm as Form,
//   StyledInput,
//   StyledButton as Button,
// } from 'components/Form/Form.style';
import {
  //   FormSectionWrapper,
  //   StyledHeading,
  //   StyledInfoP,
  Wrapper,
  //   FlippingCardSection,
} from 'components/Reservation/Reservation.style';
// import * as Yup from 'yup';
// import { OPENING_MUSEUM_HOUR, CLOSING_MUSEUM_HOUR } from 'utils/constants';
// import convertDate from 'helpers/convertDate';
// import 'yup-phone';
// import {
//   getFirestore,
//   getDocs,
//   doc,
//   addDoc,
//   setDoc,
//   collection,
//   Timestamp,
// } from 'firebase/firestore/lite';
// import axios from 'axios';
// import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
// import FlippingCard from 'components/FlippingCard';
// import { FLIPPING_CARD_COMPANY_EVENTS } from 'utils/constants/flippingCardsContent';
// import firebaseApp from '../../firebase';
//
// type InputProps = {
//   type: 'text' | 'number' | 'tel' | 'date';
//   min?: string;
//   max?: string;
//   name: string;
//   innerRef?: any;
//   placeholder?: string;
//   autoComplete?: string;
// };
//
// const Input = ({ ...props }: InputProps) => {
//   const [field, meta] = useField(props);
//
//   return (
//     <>
//       <StyledInput {...field} {...props} />
//       {meta.touched && meta.error ? (
//         <InputError>{meta.error}</InputError>
//       ) : null}
//     </>
//   );
// };
//
// Input.defaultProps = {
//   min: undefined,
//   max: undefined,
//   innerRef: undefined,
// };
//
// type DatePickerProps = {
//   name: string;
//   minDate: Date;
//   maxDate: Date;
//   // eslint-disable-next-line no-unused-vars
//   filterTime: (time: Date) => boolean;
//   // eslint-disable-next-line no-unused-vars
//   filterDate: (day: Date) => boolean;
// };
//
// const DatePickerInput = forwardRef((props, ref) => (
//   <Input innerRef={ref} type='text' name='date' placeholder='Data' {...props} />
// ));
//
// const DatePickerField = ({ ...props }: DatePickerProps) => {
//   const { setFieldValue } = useFormikContext();
//   const [field] = useField(props);
//   const now = new Date();
//
//   return (
//     <DatePicker
//       {...field}
//       {...props}
//       selected={
//         field.value && field.value.getTime() > now.getTime() + 86400
//           ? field.value
//           : null
//       }
//       customInput={<DatePickerInput />}
//       timeCaption='Godzina'
//       dateFormat='Pp'
//       filterTime={(time) => {
//         const hours = time.getHours();
//         const minutes = time.getMinutes();
//         return (
//           (hours === 11 && minutes === 0) ||
//           (hours === 12 && minutes === 30) ||
//           (hours === 14 && minutes === 0) ||
//           (hours === 15 && minutes === 30)
//         );
//       }}
//       locale={pl}
//       showTimeSelect
//       autoComplete='off'
//       onChange={(value) => {
//         setFieldValue(field.name, value);
//       }}
//     />
//   );
// };
//
// const formInitialValues = {
//   name: '',
//   lastname: '',
//   phoneNumber: '',
//   email: '',
//   adultAmount: 1,
//   childrenAmount: 0,
//   date: new Date(),
// };
//
// const auth = getAuth(firebaseApp);
// const db = getFirestore(firebaseApp);
//
// const FormError = styled.span`
//   color: ${({ theme }) => theme.colors.red};
// `;
//
// const ReservationPage: NextPage = () => {
//   const [blockedDaysInCalendar, setBlockedDaysInCalendar] = useState<string[]>(
//     []
//   );
//   const [allReservations, setAllReservations] = useState<
//     { bookedPeopleAmount: number; date: string }[] | []
//   >([]);
//   const [customOpeningDates, setCustomOpeningDate] = useState<string[]>([]);
//   const [formErrorMessage, setFormErrorMessage] = useState<string | null>(null);
//   const [isSubmittedPersonalData, setIsSubmittedPersonalData] = useState(false);
//   const [isReservationEnded, setReservationEnded] = useState(false);
//   const [formData, setFormData] = useState(formInitialValues);
//   const [verificationId, setVerificationId] = useState('');
//   const dateFromFirebase = Timestamp.now().toDate();
//   const minDate = dayjs(dateFromFirebase).add(16, 'hours').toDate();
//   const maxDate = dayjs(dateFromFirebase).add(150, 'day').toDate();
//
//   const getReservationAndCustomOpeningDates = async () => {
//     try {
//       await signInAnonymously(auth);
//       const reservationsQuery = await getDocs(
//         collection(db, 'reservation-dates')
//       );
//       const customOpeningDaysQuery = await getDocs(
//         collection(db, 'special-opening-dates')
//       );
//       reservationsQuery.forEach((reservationFromDb) => {
//         const reservationDate = dayjs(
//           reservationFromDb.data().date.seconds * 1000
//         ).toString();
//
//         setAllReservations((prevDates) => {
//           const sameDateOfReservationIndex = prevDates.findIndex(
//             ({ date }) => date === reservationDate
//           );
//           if (sameDateOfReservationIndex === -1)
//             return [
//               ...prevDates,
//               {
//                 date: reservationDate,
//                 bookedPeopleAmount: reservationFromDb.data().peopleAmount,
//               },
//             ];
//           return [
//             ...prevDates.slice(0, sameDateOfReservationIndex),
//             {
//               ...prevDates[sameDateOfReservationIndex],
//               bookedPeopleAmount:
//                 prevDates[sameDateOfReservationIndex].bookedPeopleAmount +
//                 reservationFromDb.data().peopleAmount,
//             },
//             ...prevDates.slice(sameDateOfReservationIndex + 1),
//           ];
//         });
//       });
//       customOpeningDaysQuery.forEach((customDate) => {
//         setCustomOpeningDate((prevDates) => {
//           const date = dayjs(customDate.data().date.seconds * 1000).toString();
//           return [...prevDates, date];
//         });
//       });
//     } catch {
//       setFormErrorMessage('Coś poszło nie tak :(');
//     }
//   };
//
//   useEffect(() => {
//     setBlockedDaysInCalendar(() => {
//       const blockedDays = allReservations.filter(
//         ({ bookedPeopleAmount }) =>
//           bookedPeopleAmount + formData.adultAmount > 30
//       );
//       return blockedDays.map(({ date }) => date);
//     });
//   }, [allReservations, formData.adultAmount]);
//
//   const filterPassedTime = (time: Date) => {
//     const selectedDate = dayjs(time).toString();
//     return !blockedDaysInCalendar.includes(selectedDate);
//   };
//
//   const filterPassedDay = (day: Date) => {
//     const isCustomDate = customOpeningDates.includes(dayjs(day).toString());
//     const isOpeningDate =
//       day.getDay() !== 0 &&
//       day.getDay() !== 6 &&
//       day.getDay() !== 5 &&
//       !isCustomDate;
//     return !isOpeningDate && day > minDate;
//   };
//
//   const handleSubmit = async (formValues: typeof formInitialValues) => {
//     try {
//       setFormData(formValues);
//       setAllReservations([]);
//       setFormErrorMessage(null);
//
//       const cleanedPhoneNumber = formValues.phoneNumber.replace(/\D/g, '');
//       let adjustedPhoneNumber = '';
//       if (cleanedPhoneNumber.length === 9) {
//         adjustedPhoneNumber = `+48${cleanedPhoneNumber}`;
//       } else if (
//         cleanedPhoneNumber.length === 11 &&
//         cleanedPhoneNumber.startsWith('48')
//       ) {
//         adjustedPhoneNumber = `+${cleanedPhoneNumber}`;
//       } else {
//         setFormErrorMessage('Niepoprawny format numeru telefonu');
//         return;
//       }
//
//       await getReservationAndCustomOpeningDates();
//
//       let appVerifier = window.recaptchaVerifier;
//       if (!appVerifier) {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           'recaptcha-container',
//           {
//             size: 'invisible',
//           },
//           auth
//         );
//         appVerifier = window.recaptchaVerifier;
//         appVerifier.render();
//       }
//       if (!formErrorMessage) {
//         signInWithPhoneNumber(auth, adjustedPhoneNumber, appVerifier)
//           .then((result) => {
//             setIsSubmittedPersonalData(true);
//             setVerificationId(result.verificationId);
//           })
//           .catch((error) => {
//             console.error('Błąd podczas wysyłania kodu SMS:', error);
//             setFormErrorMessage('Coś poszło nie tak przy wysyłaniu SMS');
//           });
//       }
//     } catch {
//       setFormErrorMessage('Coś poszło nie tak :(');
//     }
//   };
//
//   const isDateisValid = (date: Date) => {
//     setFormErrorMessage(null);
//     if (blockedDaysInCalendar.includes(dayjs(date).toString())) {
//       setFormErrorMessage('Wybrano zarezerwowany już termin!');
//       return false;
//     }
//     if (
//       date.getHours() < OPENING_MUSEUM_HOUR ||
//       date.getHours() > CLOSING_MUSEUM_HOUR
//     ) {
//       setFormErrorMessage('Godzina rezerwacji musi być w godzinach otwarcia');
//       return false;
//     }
//     if (
//       date.getDay() !== 0 &&
//       date.getDay() !== 6 &&
//       date.getDay() !== 5 &&
//       !customOpeningDates.includes(dayjs(date.setHours(0, 0, 0, 0)).toString())
//     ) {
//       setFormErrorMessage(
//         'Termin rezerwacji musi być piątkiem, sobotą, niedzielą lub dniem wolnym'
//       );
//       return false;
//     }
//     if (date <= minDate) {
//       setFormErrorMessage(
//         'Termin rezerwacji może być wybrany najpóźniej 16h przed czasem'
//       );
//       return false;
//     }
//     return true;
//   };
//
//   if (isSubmittedPersonalData && !isReservationEnded) {
//     return (
//       <Layout>
//         <FormSectionWrapper>
//           <>
//             <Formik
//               key='auth-form'
//               initialValues={{ phoneAuthCode: '', date: new Date() }}
//               validationSchema={Yup.object({
//                 phoneAuthCode: Yup.string().required('Wymagane'),
//                 date: Yup.date().required('Wymagane'),
//               })}
//               onSubmit={({ phoneAuthCode, date }) => {
//                 if (isDateisValid(date)) {
//                   setFormData((prevState) => ({ ...prevState, date }));
//                   const credential = PhoneAuthProvider.credential(
//                     verificationId,
//                     phoneAuthCode
//                   );
//                   signInWithCredential(auth, credential)
//                     .then(async () => {
//                       try {
//                         const ref = await addDoc(
//                           collection(db, 'reservation-dates'),
//                           {
//                             date,
//                             peopleAmount:
//                               formData.childrenAmount + formData.adultAmount,
//                           }
//                         );
//                         await setDoc(doc(db, 'reservations', `${ref.id}`), {
//                           ...formData,
//                           time: `${date.getHours()}:${
//                             date.getMinutes() === 0 ? `00` : date.getMinutes()
//                           }`,
//                           date: convertDate(date),
//                         });
//                         auth.currentUser?.getIdToken(true).then((token) =>
//                           axios
//                             .post('/api/reservation', {
//                               token,
//                               id: ref.id,
//                               ...formData,
//                               date,
//                             })
//                             .then(() => setReservationEnded(true))
//                             .catch(() =>
//                               setFormErrorMessage('Coś poszło nie tak :(')
//                             )
//                         );
//                       } catch {
//                         setFormErrorMessage('Coś poszło nie tak :(');
//                       }
//                     })
//                     .catch(() => setFormErrorMessage('Zły kod weryfikacji'));
//                 }
//               }}
//             >
//               <Form>
//                 <label htmlFor='date'>Data</label>
//                 <DatePickerField
//                   name='date'
//                   filterTime={filterPassedTime}
//                   filterDate={filterPassedDay}
//                   minDate={minDate}
//                   maxDate={maxDate}
//                 />
//                 <label htmlFor='phoneAuthCode'>Kod weryfikacji SMS</label>
//                 <Input
//                   type='text'
//                   name='phoneAuthCode'
//                   autoComplete='one-time-code'
//                 />
//                 {formErrorMessage ? (
//                   <FormError>{formErrorMessage}</FormError>
//                 ) : null}
//                 <Button type='submit'>Rezerwuj</Button>
//               </Form>
//             </Formik>
//           </>
//         </FormSectionWrapper>
//       </Layout>
//     );
//   }
//
//   if (isReservationEnded) {
//     const reservationSuccessText = () => {
//       const adultAmountText =
//         formData.adultAmount > 1
//           ? `${formData.adultAmount} osób`
//           : `jednej osoby`;
//       const childrenAmountText = () => {
//         if (formData.childrenAmount === 1)
//           return ` oraz jednego dziecka w wieku 4-6 lat.`;
//         if (formData.childrenAmount > 1)
//           return ` oraz ${formData.childrenAmount} dzieci w wieku 4-6 lat.`;
//         return '.';
//       };
//       return `Miło nam poinformować,że zarezerwowałeś termin ${dayjs(
//         formData.date
//       ).format(
//         'DD/MM/YYYY HH:mm'
//       )} dla ${adultAmountText}${childrenAmountText()}`;
//     };
//     return (
//       <Layout>
//         <FormSectionWrapper>
//           <StyledHeading>{reservationSuccessText()}</StyledHeading>
//           <StyledHeading>
//             Przypominamy jednocześnie, że rezerwacja online nie jest biletem,
//             umożliwia jedynie zakup biletu minimum 20 minut przed planowaną
//             godziną wejścia. Po upływie tego czasu rezerwacja jest anulowana i
//             wolne miejsca są kierowane do sprzedaży.
//           </StyledHeading>
//         </FormSectionWrapper>
//       </Layout>
//     );
//   }
//   return (
//     <Layout>
//       <Wrapper>
//         <FormSectionWrapper>
//           <StyledHeading>Zarezerwuj termin już teraz!</StyledHeading>
//           <StyledInfoP>
//             Uwaga: Rezerwacji nie można dokonywać w planowanym dniu przyjazdu (w
//             dniu przyjazdu zadzwoń)
//           </StyledInfoP>
//           <Formik
//             key='reservation-form'
//             initialValues={formInitialValues}
//             validationSchema={Yup.object({
//               name: Yup.string()
//                 .min(3, 'Imię musi zawierać przynajmniej 3 znaki')
//                 .max(15, 'Imię nie może być dłuższe od 15 znaków')
//                 .required('Wymagane'),
//               lastname: Yup.string()
//                 .min(3, 'Nazwisko musi zawierać przynajmniej 3 znaki')
//                 .max(15, 'Nazwisko nie może być dłuższe od 15 znaków')
//                 .required('Wymagane'),
//               phoneNumber: Yup.string()
//                 .transform((value: string) =>
//                   value ? value.replace(/\D/g, '') : ''
//                 )
//                 .test(
//                   'len',
//                   'Numer telefonu powinien zawierać 9 cyfr (bez kierunkowego) lub 11 cyfr (z kierunkowym)',
//                   (val) => !!val && (val.length === 9 || val.length === 11)
//                 )
//                 .required('Wymagane'),
//               email: Yup.string()
//                 .email('Nieprawidłowy email')
//                 .required('Wymagane'),
//               adultAmount: Yup.number()
//                 .min(1, 'Minimalna liczba osób to 1')
//                 .max(30, 'Maksymalna liczba osób to 30')
//                 .required('Wymagane'),
//               childrenAmount: Yup.number()
//                 .min(0, 'Liczba dzieci nie może być mniejsza od 0')
//                 .max(15, 'Maksymalna liczba dzieci to 15')
//                 .required('Wymagane'),
//             })}
//             onSubmit={handleSubmit}
//           >
//             <Form>
//               <label htmlFor='name'>Imię</label>
//               <Input type='text' name='name' />
//               <label htmlFor='lastname'>Nazwisko</label>
//               <Input type='text' name='lastname' />
//               <label htmlFor='phoneNumber'>Numer telefonu</label>
//               <Input type='tel' name='phoneNumber' />
//               <label htmlFor='email'>e-mail</label>
//               <Input type='text' name='email' />
//               <label htmlFor='adultAmount'>Liczba osób</label>
//               <Input type='number' name='adultAmount' min='1' max='30' />
//               <div id='recaptcha-container' />
//               <Button id='reservation-submit' type='submit'>
//                 Dalej
//               </Button>
//             </Form>
//           </Formik>
//         </FormSectionWrapper>
//         <FlippingCardSection>
//           <FirefighterTruckAttraction />
//           <FlippingCard content={FLIPPING_CARD_COMPANY_EVENTS} />
//         </FlippingCardSection>
//       </Wrapper>
//     </Layout>
//   );
// };
// export default ReservationPage;

const ReservationPageOld: NextPage = () => (
  <Layout>
    <Wrapper>
      Ta strona została zmieniona. Proszę przejść do zakładki rezerwacje.
    </Wrapper>
  </Layout>
);

export default ReservationPageOld;
