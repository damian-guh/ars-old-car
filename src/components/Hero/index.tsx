import StaticImageData from 'next';
import Image from 'next/image';
import {
  HeroWrapper,
  HeroImageWrapper,
  Overlay,
  HeroTitle,
  HeroDesc,
  HeroTextWrapper,
} from 'components/Hero/Hero.style';

type Props = {
  image: StaticImageData;
  title?: string;
  desc: string;
};

const Hero = ({ image, title, desc }: Props) => (
  <HeroWrapper>
    <HeroImageWrapper>
      <Overlay />
      <Image
        src={image}
        placeholder='blur'
        layout='fill'
        objectFit='cover'
        quality={90}
        alt={title}
      />
      <HeroTextWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroDesc>{desc}</HeroDesc>
      </HeroTextWrapper>
    </HeroImageWrapper>
  </HeroWrapper>
);

export default Hero;
