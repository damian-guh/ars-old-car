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
import FlippingCard from 'components/FlippingCard';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';
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

const calendarFlippingCardProps = {
  title: 'Kalendarium ARS OLD CAR 2024',
  text: [
    '19.04.2024 – Otwarcie sezonu ARS OLD CAR',
    '25.05.2024- Zlot zabytkowych samochodów Citroen, Kazimierz Dolny nad Wisłą ',
    '30.05 - 1.06.2024 – Rajd Koguta, OŁAWA-MRĄGOWO',
    '21.07.2024 - Obchody 65-rocznicy tragicznej śmierci załogi rajdu Adriatyk, CHĘCINY',
    '11.08.2024 – MOTOPIKNIK, Muzeum Wsi Kieleckiej w Tokarni',
    '14 - 18.08.2024 - 17 Światowy Zlot Citroena, TORUŃ',
  ],
};

const Hero = ({ images, title, desc }: Props) => {
  const isDesktop = useDesktopMediaQuery();
  const isMounted = useMounted();

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
          {isDesktop && isMounted ? (
            <FlippingCard content={calendarFlippingCardProps} />
          ) : null}

          <Link href='/bastek'>
            <HeroSaleOffer>
              <HeroSaleOfferTitle>Nowość 2024!</HeroSaleOfferTitle>
              <h4>10% taniej</h4>
              <span>Jazda żukiem strażackim</span>
              <span>w ARS OLD CAR</span>
              <span>Muzeum Motoryzacji</span>
              <span>Spływ kajakiem Bastek</span>
              <span>Ognisko z kiełbaskami po spływie</span>
            </HeroSaleOffer>
          </Link>
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
