import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import { Formik, useField } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';
import { setCookies, checkCookies, getCookie } from 'cookies-next';
import {
  StyledForm as Form,
  StyledInput,
  StyledButton as Button,
  InputError,
} from 'components/Form/Form.style';
import { QuizRules } from 'components/Quiz/Layout/StartSection/StartSection.style';
import getTomorrowDate from 'helpers/getTomorrowDate';
import axios from 'axios';

type Values = {
  name: string;
  email: string;
};

type Props = {
  color?: string;
};

type InputProps = {
  type: 'text';
  name: string;
  placeholder: string;
  value?: string;
  disabled: boolean;
  color?: string;
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

const StartSection = ({ color }: Props) => {
  const recaptchaRef = useRef<any>(null);
  const [formValues, setFormValues] = useState<Values | null>(null);
  const [isFormDisabled, setFormDisabled] = useState(false);
  const router = useRouter();

  const onReCAPTCHAChange = async (captchaCode: string) => {
    if (!captchaCode) {
      return;
    }
    try {
      await axios.post('/api/newsletter', {
        captcha: captchaCode,
        formValues,
      });
    } catch (error) {
      throw Error(error);
    } finally {
      recaptchaRef.current.reset();
    }
  };

  useEffect(() => {
    if (checkCookies('quiz-username')) {
      setFormDisabled(true);
    }
  }, []);

  return (
    <>
      <QuizRules>
        Szukaj kodów QR, odpowiadaj na pytania i otrzymaj nagrodę za wygraną.
      </QuizRules>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Imię musi zawierać przynajmniej 3 znaki')
            .max(15, 'Imię nie może być dłuższe od 15 znaków')
            .required('Wymagane'),
          email: Yup.string().email('Niepoprawny email'),
        })}
        onSubmit={(values: Values) => {
          if (values.email) {
            setFormValues(values);
            recaptchaRef.current.execute();
          }
          setCookies('quiz-username', values.name, {
            secure: true,
            expires: getTomorrowDate(),
          });
          setCookies('quiz-category', router.pathname, {
            secure: true,
            expires: getTomorrowDate(),
          });
          setFormDisabled(true);
        }}
      >
        <Form>
          {/* @ts-ignore */}
          <ReCAPTCHA
            ref={recaptchaRef}
            size='invisible'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={onReCAPTCHAChange}
          />
          <Input
            type='text'
            name='name'
            placeholder={
              isFormDisabled ? String(getCookie('quiz-username')) : 'Imię'
            }
            disabled={isFormDisabled}
            color={color}
          />
          <Input
            type='text'
            name='email'
            placeholder='Email'
            disabled={isFormDisabled}
            color={color}
          />
          <Button type='submit' disabled={isFormDisabled} color={color}>
            Start
          </Button>
        </Form>
      </Formik>
      {isFormDisabled ? <span>Szukaj kodów QR z pytaniami!</span> : null}
    </>
  );
};

Input.defaultProps = {
  value: undefined,
  color: undefined,
};

StartSection.defaultProps = {
  color: undefined,
};

export default StartSection;
