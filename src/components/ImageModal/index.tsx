import { Dispatch, SetStateAction } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { IoMdClose } from '@react-icons/all-files/io/IoMdClose';

Modal.setAppElement('#__next');

const modalStyles = {
  content: {
    backgroundColor: '#272727',
    border: '0',
    display: 'flex',
    alignItems: 'center',
  },
  overlay: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#272727',
    zIndex: '20',
    position: 'absolute',
    left: '0',
    top: '0',
    border: '0',
  },
};

const CloseIcon = styled(IoMdClose)`
  fill: ${({ theme }) => theme.colors.white};
  position: fixed;
  right: 35px;
  top: 35px;
  transform: scale(2.3);
  cursor: pointer;
`;

const ImageFullWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

type Props = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  clickedImage: (EventTarget & { src: string; alt: string }) | null;
};

const ImageModal = ({ isModalOpen, setModalOpen, clickedImage }: Props) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setModalOpen(false)}
    /* @ts-ignore */
    style={modalStyles}
  >
    {clickedImage ? (
      <>
        <ImageFullWrapper>
          <img
            src={clickedImage.src}
            alt={clickedImage.alt}
            style={{ maxWidth: '95%', maxHeight: '95%', borderRadius: '10px' }}
          />
        </ImageFullWrapper>
        <CloseIcon onClick={() => setModalOpen(false)} />
      </>
    ) : null}
  </Modal>
);

export default ImageModal;
