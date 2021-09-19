import Image from 'next/image';
import {
  HeroWrapper,
  HeroImageWrapper,
  Text,
  Overlay,
} from 'components/Hero/Hero.style';
import HeroImage from '../../../public/hero.png';

const Hero = () => (
  <HeroWrapper>
    <HeroImageWrapper>
      <Overlay />
      <Text>
        Nieoczywiste, rodzinne miejsce miłośników motoryzacji, w niebanalny
        sposób ukazujący świat odchodzącej historii pojazdów
      </Text>
      <Image
        src={HeroImage}
        placeholder='blur'
        layout='fill'
        objectFit='cover'
        quality={90}
      />
    </HeroImageWrapper>
  </HeroWrapper>
);

export default Hero;
