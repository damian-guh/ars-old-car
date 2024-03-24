import { useState, MouseEvent, useEffect } from 'react';
import {
  Wrapper,
  ItemWrapper,
  ImageWrapper,
  StyledImage,
  NearbyTitleSectionWrapper,
  NearbyTitle,
  NearbySectionTitle,
  NearbyDesc,
  InfoSectionWrapper,
  MoreInfoLink,
} from 'components/Nearby/Nearby.style';
import NEARBY_DATA from 'components/Nearby/NearbyData';
import ImageModal from 'components/ImageModal';

const Nearby = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string; id: string }) | null
  >(null);
  const [allImages, setAllImages] = useState<
    [] | { asset: [{ url: string; id: string }] }[]
  >([]);
  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  useEffect(() => {
    NEARBY_DATA.forEach(({ image, title: id }) =>
      setAllImages((prevState) => [
        ...prevState,
        { asset: [{ url: image.src, id }] },
      ])
    );
  }, []);

  return (
    <>
      <>
        <NearbyTitleSectionWrapper>
          <NearbySectionTitle>Zaplanuj wycieczkę z Nami</NearbySectionTitle>
          <NearbyDesc>
            Zapraszamy do Nas wszystkich fanów motoryzacji, ale nie tylko. Jeśli
            chcesz spędzić w okolicy cały dzień, weekend lub wręcz kilka dni
            zorganizujemy dla Ciebie program atrakcji i pokażemy Ci miejsca,
            które nie zawsze są oczywistym wyborem. Napisz do Nas lub zadzwoń.
            Podaj tylko datę pobytu, ilość osób i ich wiek, a resztą się już
            zajmiemy.
          </NearbyDesc>
        </NearbyTitleSectionWrapper>
        <Wrapper>
          {NEARBY_DATA.map(({ title, distance, image, link }, index) => (
            <ItemWrapper key={title}>
              <ImageWrapper index={index}>
                <StyledImage
                  src={image}
                  onClick={(event) => handleModal(event)}
                  layout='fill'
                  quality={95}
                  placeholder='blur'
                  objectFit='cover'
                  id={title}
                  alt={title}
                />
              </ImageWrapper>
              <InfoSectionWrapper index={index}>
                <NearbyTitle>
                  {title} - tylko {distance} od ARS OLD CAR
                </NearbyTitle>
                <MoreInfoLink href={link} target='_blank' rel='noreferrer'>
                  Więcej informacji
                </MoreInfoLink>
              </InfoSectionWrapper>
            </ItemWrapper>
          ))}
        </Wrapper>
        <ImageModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          clickedImage={clickedImage}
          allImages={allImages}
        />
      </>
    </>
  );
};

export default Nearby;
