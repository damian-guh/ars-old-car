import { useState, MouseEvent } from 'react';
import {
  Wrapper,
  ItemWrapper,
  ImageWrapper,
  StyledImage,
  NearbyTitleSectionWrapper,
  NearbyTitle,
  NearbySectionTitle,
  NearbyDesc,
  ImageFullWrapper,
  CloseIcon,
  InfoSectionWrapper,
  MoreInfoLink,
} from 'components/Nearby/Nearby.style';
import NEARBY_DATA from 'components/Nearby/NearbyData';
import Modal from 'react-modal';

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

const Nearby = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string }) | null
  >(null);
  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  return (
    <>
      {!isModalOpen ? (
        <>
          <NearbyTitleSectionWrapper>
            <NearbySectionTitle>
              Atrakcje turystyczne w pobliżu
            </NearbySectionTitle>
            <NearbyDesc>
              Zapraszamy do Nas wszystkich fanów motoryzacji, ale nie tylko.
              Jeśli chcesz spędzić w okolicy cały dzień, weekend lub wręcz kilka
              dni zorganizujemy dla Ciebie program atrakcji i pokażemy Ci
              miejsca, które nie zawsze są oczywistym wyborem. Napisz do Nas lub
              zadzwoń. Podaj tylko datę pobytu, ilość osób i ich wiek, a resztą
              się już zajmiemy.
            </NearbyDesc>
          </NearbyTitleSectionWrapper>
          <Wrapper>
            {NEARBY_DATA.map(({ title, distance, image, link }, index) => (
              <ItemWrapper key={title}>
                <InfoSectionWrapper index={index}>
                  <NearbyTitle>
                    {title} - tylko {distance} od ARS OLD CAR
                  </NearbyTitle>
                  <MoreInfoLink href={link} target='_blank' rel='noreferrer'>
                    Więcej informacji
                  </MoreInfoLink>
                </InfoSectionWrapper>
                <ImageWrapper index={index}>
                  <StyledImage
                    src={image}
                    onClick={(event) => handleModal(event)}
                    layout='fill'
                    quality={95}
                    placeholder='blur'
                    objectFit='cover'
                    alt={title}
                  />
                </ImageWrapper>
              </ItemWrapper>
            ))}
          </Wrapper>
        </>
      ) : (
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
                  style={{ maxWidth: '95%', maxHeight: '95%' }}
                />
              </ImageFullWrapper>
              <CloseIcon onClick={() => setModalOpen(false)} />
            </>
          ) : null}
        </Modal>
      )}
    </>
  );
};

export default Nearby;
