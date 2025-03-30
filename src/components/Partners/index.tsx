import Image from 'next/legacy/image';
import {
  PartnersLogoWrapper,
  ImageWrapper,
  Wrapper,
} from 'components/Partners/Partners.style';
import rotLogo from '../../../public/rot-logo.png';
import danutaLogo from '../../../public/logo-danuta-przewodnik.png';
import logoBastek from '../../../public/logo-bastek.png';
import pttkLogo from '../../../public/logo-PTTK.png';
import kayaksLogo from '../../../public/logo-kayaks.png';
import grodLogo from '../../../public/logo-grod.png';

const partners = [
  { name: 'ROT', logo: rotLogo, url: 'https://rot.swietokrzyskie.travel/' },
  {
    name: 'Danuta Ramiączek',
    logo: danutaLogo,
    url: 'https://swietokrzyski-przewodnik.pl/',
  },
  {
    name: 'Spływy Kajakowe Bastek',
    logo: logoBastek,
    url: 'https://nidy.pl/',
  },
  { name: 'PTTK', logo: pttkLogo, url: 'https://www.pttkkielce.pl/' },
  {
    name: 'KAYAKS',
    logo: kayaksLogo,
    url: 'https://www.crystalkayakskielce.com/strona-g%C5%82%C3%B3wna',
  },
  {
    name: 'Gród Pędzików',
    logo: grodLogo,
    url: 'https://www.grodpedzikow.pl/',
  },
];

const Partners = () => (
  <Wrapper>
    <h2>PARTNERZY</h2>
    <PartnersLogoWrapper>
      {partners.map(({ name, logo, url }) => (
        <a href={url} target='_blank' key={name} rel='noopener noreferrer'>
          <ImageWrapper>
            <Image
              src={logo}
              placeholder='blur'
              layout='fill'
              objectFit='contain'
              quality={90}
              alt={name}
            />
          </ImageWrapper>
        </a>
      ))}
    </PartnersLogoWrapper>
  </Wrapper>
);

export default Partners;
