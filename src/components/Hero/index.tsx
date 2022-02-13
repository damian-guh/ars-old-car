import { ReactNode } from 'react';
import Image from 'next/image';
import {
  HeroWrapper,
  HeroImageWrapper,
  Overlay,
  HeroTitle,
  HeroDesc,
} from 'components/Hero/Hero.style';
import HeroImage from '../../../public/hero1.png';

type Props = {
  children: ReactNode;
};

const Hero = ({ children }: Props) => (
  <HeroWrapper>
    <section>
      <HeroTitle>Witaj w Naszym Muzeum</HeroTitle>
      <HeroDesc>
        To nieoczywiste, rodzinne miejsce miłośników motoryzacji, w niebanalny
        sposób ukazujący świat odchodzącej historii pojazdów
      </HeroDesc>
      {children}
    </section>
    <HeroImageWrapper>
      <Overlay />
      <Image
        src={HeroImage}
        placeholder='blur'
        layout='fill'
        objectFit='cover'
        quality={90}
        alt='2CV tło'
      />
    </HeroImageWrapper>
  </HeroWrapper>
);

export default Hero;
