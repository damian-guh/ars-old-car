import React from 'react';
import Image, { ImageProps } from 'next/legacy/image';
import Link from 'next/link';
import Carousel from 'components/Carousel';
import {
  HeroWrapper,
  HeroImageWrapper,
  Overlay,
  HeroTitle,
  HeroDesc,
  HeroTextAndButtonsWrapper,
  HeroActionButton,
  HeroActionButtonsWrapper,
  HeroSaleOffer,
  HeroPostsWrapper,
  HeroSaleOfferTitle,
  ReviewTitle,
  ReviewWrapper,
} from 'components/Hero/Hero.style';
import USERS_REVIEWS from 'utils/constants/usersReviews';

type Props = {
  images: ImageProps[];
  title?: string;
  desc?: string;
};

type ImageOrCarouselProps = {
  type: 'image' | 'carousel';
  element: unknown;
  id: number;
};

const ImageOrCarousel = ({
  element: { type, element },
  title,
}: {
  element: ImageOrCarouselProps;
  title?: string;
}) => {
  if (type === 'image') {
    const imageElement = element as ImageProps;
    return (
      <HeroImageWrapper key={imageElement.src as string}>
        <Overlay />
        <Image
          {...imageElement}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={90}
          alt={title}
        />
      </HeroImageWrapper>
    );
  }
  return (
    <div className='carousel'>
      <ReviewTitle>Opinie o nas</ReviewTitle>
      {element as React.ReactElement}
      <p>Opinie Google</p>
    </div>
  );
};

const Hero = ({ images, title, desc }: Props) => {
  const carousel = (
    <>
      <Carousel>
        {USERS_REVIEWS.map(({ name, review, id }) => ({
          id,
          content: (
            <ReviewWrapper key={id}>
              <h3>{name}</h3>
              <p>{review}</p>
            </ReviewWrapper>
          ),
        }))}
      </Carousel>
    </>
  );

  const elements: ImageOrCarouselProps[] = images.map((image, index) => ({
    type: 'image',
    element: image,
    id: index,
  }));
  elements.splice(2, 0, {
    type: 'carousel',
    element: carousel,
    id: 0,
  });

  return (
    <HeroWrapper>
      {elements.map(({ type, element, id }) => (
        <ImageOrCarousel
          element={{ type, element, id }}
          title={title}
          key={id}
        />
      ))}
      <HeroTextAndButtonsWrapper>
        <HeroPostsWrapper>
          <Link href='/kalendarium'>
            <HeroSaleOffer>
              <HeroSaleOfferTitle>KALENDARIUM</HeroSaleOfferTitle>
              <HeroSaleOfferTitle>ARS OLD CAR 2025</HeroSaleOfferTitle>
            </HeroSaleOffer>
          </Link>
          <Link href='/bastek'>
            <HeroSaleOffer>
              <HeroSaleOfferTitle>Nowość 2025!</HeroSaleOfferTitle>
              <h4>10% taniej</h4>
              <span>Dwie atrakcje w jeden dzień</span>
              <span>1. Muzeum motoryzacji</span>
              <span>2. Spływ Kajakiem Nidą</span>
              <span>Ognisko z kiełbaskami po spływie</span>
            </HeroSaleOffer>
          </Link>
          <a
            href='https://drive.google.com/file/d/1R3gDwGAJnDpV-138A8Zex5mgdZHDBvFw/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <HeroSaleOffer>
              <HeroSaleOfferTitle>
                🎵Posłuchaj naszej piosenki!
              </HeroSaleOfferTitle>
            </HeroSaleOffer>
          </a>
          <a href='https://endlessstudio.pl' target='_blank' rel='noreferrer'>
            <HeroSaleOffer>
              <HeroSaleOfferTitle>Jesteśmy producentem</HeroSaleOfferTitle>
              <HeroSaleOfferTitle>ATRAKCJI VR</HeroSaleOfferTitle>
            </HeroSaleOffer>
          </a>
        </HeroPostsWrapper>
        <HeroActionButtonsWrapper>
          <HeroActionButton
            href='https://www.google.com/maps/place/Ars+Old+Car/@50.7478915,20.4697656,15z/data=!4m5!3m4!1s0x0:0x16c188f0f4675b70!8m2!3d50.7478915!4d20.4697656'
            target='_blank'
          >
            Nawiguj
          </HeroActionButton>
          <HeroActionButton href='tel:515 355 533'>Zadzwoń</HeroActionButton>
          <HeroActionButton href='/rezerwacje'>Rezerwuj bilet</HeroActionButton>
        </HeroActionButtonsWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroDesc>{desc}</HeroDesc>
      </HeroTextAndButtonsWrapper>
    </HeroWrapper>
  );
};

export default Hero;
