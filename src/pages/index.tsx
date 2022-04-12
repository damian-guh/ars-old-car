import Layout from 'components/Layout';
import { Map } from 'components/Layout/Map';
import Hero from 'components/Hero';
import { useState } from 'react';
import StaticImageData from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import heroMuseumImage from '../../public/hero1.png';
import heroForest2CVImage from '../../public/2cv-forest.png';
import wedding2CVImage from '../../public/2cv-slub.jpg';

const heroMuseumTitle = 'Witaj w Naszym Muzeum';
const heroMuseumDesc =
  'To nieoczywiste, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów';
const heroForestDesc =
  'Wystawa 2CV WORLD poświęcona jednemu z najbardziej charakterystycznych klasyków w dziejach motoryzacji zwanym "Brzydkim Kaczątkiem", "Kaczką" czy też "Parasolem na czterech kołach". Z tej okazji można zobaczyć największą kolekcję gadżetów związanych z tym samochodem, w tym zaskakującą kolekcję "kaczek".';

const FlippingCardsSection = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.headerGray};
  padding: 20px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: column;
  }
`;

const FlippingCardWrapper = styled.div<{ isFrontSide: boolean }>`
  width: 400px;
  height: 400px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: rotateY(${({ isFrontSide }) => (isFrontSide ? '0' : '180deg')});
  background-color: ${({ theme }) => theme.colors.headerGray};
`;

const FlippingCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

const FlippingCardFront = styled(FlippingCardFace)`
  background-color: ${({ theme }) => theme.colors.headerGray};
  text-align: center;
`;

const FlippingCardBack = styled(FlippingCardFace)`
  background-color: ${({ theme }) => theme.colors.headerGray};
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

const FlippingCard = ({
  frontTitle,
  frontImage,
}: {
  frontTitle: string;
  frontImage: StaticImageData;
}) => {
  const [isFrontSide, setCardSide] = useState(true);
  return (
    <FlippingCardWrapper
      onClick={() => setCardSide((prevState) => !prevState)}
      isFrontSide={isFrontSide}
    >
      <FlippingCardFront>
        <Image src={frontImage} alt={frontTitle} />
        <h3>{frontTitle}</h3>
      </FlippingCardFront>
      <FlippingCardBack>
        <p>
          Zapraszam do skorzystania z samochodu Citroen 2CV z kierowcą do ślubu
          lub innych okoliczności w województwie Świętokrzyskim i nie tylko!
        </p>
        <p>Kontakt: 505 747 488</p>
        <p>Mail: emil.wlodarski@wp.pl</p>
        <p>
          Samochód wystąpił w reklamie z Robertem Makłowiczem{' '}
          <a
            href='https://www.facebook.com/bp.polska/videos/236235347921489/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C'
            target='_blank'
            rel='noreferrer'
          >
            (Zobacz film)
          </a>
        </p>
        <p>Przy zamówieniu podaj hasło ARS OLD CAR. Zapraszam!</p>
      </FlippingCardBack>
    </FlippingCardWrapper>
  );
};

const Home = () => (
  <Layout>
    <Hero
      image={heroMuseumImage}
      title={heroMuseumTitle}
      desc={heroMuseumDesc}
    />
    <Hero image={heroForest2CVImage} desc={heroForestDesc} />
    <FlippingCardsSection>
      <FlippingCard frontTitle='2CV DO ŚLUBU' frontImage={wedding2CVImage} />
    </FlippingCardsSection>
    <Map />
  </Layout>
);
export default Home;
