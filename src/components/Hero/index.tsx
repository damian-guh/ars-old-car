import Image, { ImageProps } from 'next/legacy/image';
import Link from 'next/link';
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
  HeroSaleOfferTitle,
} from 'components/Hero/Hero.style';

type Props = {
  images: ImageProps[];
  title?: string;
  desc?: string;
};

const Hero = ({ images, title, desc }: Props) => (
  <HeroWrapper>
    <HeroTextAndButtonsWrapper>
      <Link href='/bastek'>
        <HeroSaleOffer>
          <HeroSaleOfferTitle>Nowość 2023!</HeroSaleOfferTitle>
          <h4>10% taniej</h4>
          <span>Jazda żukiem strażackim</span>
          <span>w ARS OLD CAR</span>
          <span>Muzeum Motoryzacji</span>
          <span>Spływ kajakiem Bastek</span>
          <span>Ognisko z kiełbaskami po spływie</span>
        </HeroSaleOffer>
      </Link>
      <HeroActionButtonsWrapper>
        <HeroActionButton
          href='https://www.google.com/maps/place/Ars+Old+Car/@50.7478915,20.4697656,15z/data=!4m5!3m4!1s0x0:0x16c188f0f4675b70!8m2!3d50.7478915!4d20.4697656'
          target='_blank'
        >
          Nawiguj
        </HeroActionButton>
        <HeroActionButton href='tel:515 355 533'>Zadzwoń</HeroActionButton>
        <HeroActionButton href='/rezerwacje'>Kup bilet</HeroActionButton>
      </HeroActionButtonsWrapper>
      <HeroTitle>{title}</HeroTitle>
      <HeroDesc>{desc}</HeroDesc>
    </HeroTextAndButtonsWrapper>
    {images.map((image) => (
      <HeroImageWrapper key={image.src as string}>
        <Overlay />
        <Image
          {...image}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={90}
          alt={title}
        />
      </HeroImageWrapper>
    ))}
  </HeroWrapper>
);

export default Hero;
