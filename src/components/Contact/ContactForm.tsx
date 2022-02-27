import { useRef, useState } from 'react';
import axios from 'axios';
import { Formik, useField } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import {
  StyledForm as Form,
  StyledInput,
  StyledTextArea,
  StyledButton as Button,
  InputError,
} from 'components/Form/Form.style';
import * as Yup from 'yup';
import 'yup-phone';

type Values = {
  name: string;
  email: string;
  phoneNumber?: string;
  message: string;
};

type InputProps = {
  type?: 'text' | 'tel';
  name: 'name' | 'email' | 'message' | 'phoneNumber';
  placeholder: 'Imię' | 'Email' | 'Wiadomość' | 'Numer telefonu';
};

const toastOptions: ToastOptions = {
  position: 'bottom-right',
  autoClose: 2500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
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

const TextArea = ({ ...props }: InputProps) => {
  const [field, meta] = useField(props);

  return (
    <>
      <StyledTextArea {...field} {...props} />
      {meta.touched && meta.error ? (
        <InputError>{meta.error}</InputError>
      ) : null}
    </>
  );
};

const ContactForm = () => {
  const recaptchaRef = useRef<any>(null);
  const [formValues, setFormValues] = useState<Values | null>(null);

  const onReCAPTCHAChange = async (captchaCode: string) => {
    if (!captchaCode) {
      return;
    }
    try {
      const response = await axios.post('/api/mail', {
        captcha: captchaCode,
        formValues,
      });
      if (response.status === 200) {
        toast.success('Wiadomość została wysłana', toastOptions);
      }
    } catch {
      toast.error('Wiadomość nie została wysłana', toastOptions);
    } finally {
      recaptchaRef.current.reset();
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Imię musi zawierać przynajmniej 3 znaki')
          .max(15, 'Imię nie może być dłuższe od 15 znaków')
          .required('Wymagane'),
        email: Yup.string().email('Nieprawidłowy email').required('Wymagane'),
        phoneNumber: Yup.string().phone(
          'PL',
          true,
          'Niepoprawny numer telefonu'
        ),
        message: Yup.string()
          .min(10, 'Wiadomość zawierać przynajmniej 10 znaków')
          .max(400, 'Wiadomość nie może być dłuższa niż 400 znaków')
          .required('Wymagane'),
      })}
      onSubmit={(values: Values, { setSubmitting, resetForm }) => {
        setFormValues(values);
        recaptchaRef.current.execute().then(() => {
          resetForm();
          setSubmitting(false);
        });
      }}
    >
      <>
        <Form>
          {/* @ts-ignore */}
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
          <Input type='text' name='name' placeholder='Imię' />
          <Input type='text' name='email' placeholder='Email' />
          <Input type='tel' name='phoneNumber' placeholder='Numer telefonu' />
          <TextArea name='message' placeholder='Wiadomość' />
          <Button type='submit'>Wyślij</Button>
        </Form>
        <ToastContainer
          position='bottom-right'
          autoClose={2500}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    </Formik>
  );
};

Input.defaultProps = {
  type: null,
};

TextArea.defaultProps = {
  type: null,
};

export default ContactForm;
