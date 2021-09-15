import type { NextPage } from 'next';
import { MouseEvent } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { PHONE } from 'utils/constants';

const Wrapper = styled.div`
  min-height: 300px;
  padding: 20px;
  text-align: center;

  button {
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xl};
    cursor: pointer;

    :hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

const toastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

type CopyToClipboardEvent = MouseEvent<HTMLButtonElement> & {
  target: HTMLButtonElement;
};

const copyToClipboard = (event: CopyToClipboardEvent) => {
  const valueForClipboard = event.target.innerText;
  const toastSuccessContent = 'Skopiowano numer telefonu';
  const toastErrorContent = 'Nie udało się skopiować numeru telefonu';

  navigator.clipboard
    .writeText(valueForClipboard)
    .then(() => toast.success(toastSuccessContent, toastOptions))
    .catch(() => toast.error(toastErrorContent, toastOptions))
    .finally(() => toast.clearWaitingQueue());
};

type CopyDataButtonProps = {
  value: string;
};

const CopyDataButton = ({ value }: CopyDataButtonProps) => (
  <button
    type='button'
    onClick={(event: CopyToClipboardEvent) => copyToClipboard(event)}
  >
    {value}
  </button>
);

const ReservationPage: NextPage = () => (
  <Layout>
    <Wrapper>
      <h1>Rezerwacje dostępne na razie tylko pod numerem: </h1>
      <CopyDataButton value={PHONE} />
      <ToastContainer />
    </Wrapper>
  </Layout>
);
export default ReservationPage;
