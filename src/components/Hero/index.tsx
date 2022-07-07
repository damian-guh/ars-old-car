import StaticImageData from 'next';
import Image from 'next/image';
import {
  HeroWrapper,
  HeroImageWrapper,
  Overlay,
  HeroTitle,
  HeroDesc,
  HeroTextAndButtonsWrapper,
  HeroActionButton,
  HeroActionButtonsWrapper,
} from 'components/Hero/Hero.style';

type Props = {
  images: StaticImageData[];
  title?: string;
  desc?: string;
};

const Hero = ({ images, title, desc }: Props) => (
  <HeroWrapper>
    <HeroTextAndButtonsWrapper>
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
      <HeroImageWrapper key={image.src}>
        <Overlay />
        <Image
          src={image}
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
