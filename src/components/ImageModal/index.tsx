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
    backgroundColor: 'rgba(39,39,39,0.7)',
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
  right: 20px;
  top: 20px;
  transform: scale(2.5);
  cursor: pointer;
`;

const ImageFullWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

const ImageFull = styled.img<{ isFirst: boolean }>`
  max-width: 90%;
  max-height: 300px;
  border-radius: 10px;
  margin: 10px;
  order: ${({ isFirst }) => (isFirst ? '-1' : null)};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    max-height: 700px;
  }
`;

type Props = {
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  clickedImage: (EventTarget & { src: string; alt: string; id: string }) | null;
  allImages: { asset: [{ url: string; id: string }] }[] | [];
};

const ImageModal = ({
  isModalOpen,
  setModalOpen,
  clickedImage,
  allImages,
}: Props) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setModalOpen(false)}
    /* @ts-ignore */
    style={modalStyles}
  >
    {clickedImage ? (
      <>
        <ImageFullWrapper>
          {allImages.map(({ asset }) =>
            asset.map(({ id, url }) => (
              <ImageFull
                src={url}
                id={id}
                key={id}
                isFirst={id === clickedImage.id}
                alt='Gallery image'
              />
            ))
          )}
        </ImageFullWrapper>
        <CloseIcon onClick={() => setModalOpen(false)} />
      </>
    ) : null}
  </Modal>
);

export default ImageModal;
