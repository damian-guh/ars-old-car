import { MouseEvent } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Wrapper,
  MuseumDataSection,
  StyledPhoneIcon,
  StyledMailIcon,
} from 'components/Contact/Contact.style';
import ContactForm from 'components/Contact/ContactForm';
import { Map } from 'components/Layout/Map';
import { MAIL, PHONE } from 'utils/constants';

type CopyToClipboardEvent = MouseEvent<HTMLButtonElement> & {
  target: HTMLButtonElement;
};

const toastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const copyToClipboard = (event: CopyToClipboardEvent) => {
  const isEmail = event.target.innerText.includes('@');
  const valueForClipboard = isEmail ? MAIL : PHONE;
  const toastSuccessContent = isEmail
    ? 'Skopiowano adres e-mail'
    : 'Skopiowano numer telefonu';
  const toastErrorContent = isEmail
    ? 'Nie udało się skopiować adresu e-mail'
    : 'Nie udało się skopiować numeru telefonu';

  navigator.clipboard
    .writeText(valueForClipboard)
    .then(() => toast.success(toastSuccessContent, toastOptions))
    .catch(() => toast.error(toastErrorContent, toastOptions))
    .finally(() => toast.clearWaitingQueue());
};

type CopyDataButtonProps = {
  value: typeof MAIL | typeof PHONE;
};

const CopyDataButton = ({ value }: CopyDataButtonProps) => (
  <button
    type='button'
    onClick={(event: CopyToClipboardEvent) => copyToClipboard(event)}
  >
    {value}
  </button>
);

const Contact = () => (
  <>
    <Wrapper>
      <MuseumDataSection>
        <StyledMailIcon />
        <CopyDataButton value={MAIL} />
        <StyledPhoneIcon />
        <CopyDataButton value={PHONE} />
      </MuseumDataSection>
      <ContactForm />
      <Map />
    </Wrapper>
  </>
);

export default Contact;
