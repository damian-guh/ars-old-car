import styled from 'styled-components';
import Image from 'next/legacy/image';
import Layout from 'components/Layout';
import kayakImage from '../../public/kajak-full.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 25px;
  margin-top: 100px;
  gap: 15px;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  gap: 15px;
  padding: 50px 20px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

const KayakSpecialOfferPage = () => (
  <Layout>
    <Wrapper>
      <ImageWrapper>
        <Image
          src={kayakImage}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={90}
          alt='kajak i 2cv'
        />
        <Overlay />
      </ImageWrapper>
      <TextWrapper>
        <h1>
          Czy marzysz o niesamowitym połączeniu przygody i zabawy? W 2023 masz
          taką możliwość!
        </h1>
        <p>
          Muzeum Motoryzacji ARS OLD CAR i Spływ kajakiem BASTEK w Wolicy koło
          Chęcin zapraszają Cię na niezapomnianą wyprawę, podczas której
          odkryjesz tajemnice historii motoryzacji oraz przeżyjesz emocjonujący
          spływ kajakowy po rzece Nida. I to nie wszystko - przy jednoczesnym
          zakupie biletu na obie atrakcje, otrzymasz 10% zniżki!
        </p>
        <p>
          W Muzeum Motoryzacji ARS OLD CAR czekają na Ciebie prawdziwe perełki,
          takie jak Żuk Strażacki, Citroen 2CV czy największa w Polsce kolekcja
          wełnianych samochodów. Możesz również skorzystać z przejażdżki Żukiem
          oraz wirtualnej podróży po Saint Tropez z Żandarmem w technologii VR.
          A wszystko to w malowniczej okolicy, w otoczeniu zieleni i spokoju.
        </p>
        <p>
          Po zwiedzeniu muzeum, udaj się na spływ kajakowy po rzece Nida, ze
          Spływem kajakiem Bastek. To wspaniała okazja, aby w pełni cieszyć się
          pięknem natury i odkryć uroki okolicy z perspektywy wody. Na
          zakończenie dnia czeka na Ciebie ognisko z kiełbaskami, które
          uzupełnią niesamowite wrażenia z całego dnia.
        </p>
        <p>
          To niepowtarzalna okazja, aby spędzić czas z rodziną i przyjaciółmi na
          łonie natury oraz połączyć wspaniałą zabawę z poznawaniem historii
          motoryzacji, a przy tym zaoszczędzić 10% na bilecie. Nie czekaj!
          Zarezerwuj już dziś swój pobyt w Muzeum Motoryzacji ARS OLD CAR i na
          Spływie kajakowym BASTEK i przeżyj niesamowite przygody!
        </p>
        <p>
          Bilet łączony 10% taniej – tylko 85 zł od osoby za cały dzień
          atrakcji. Oferta dotyczy grup powyżej 10 osób.
        </p>
        <p>Zarezerwuj wcześniej:</p>
        <div>
          <strong>Spływ kajakiem BASTEK</strong>{' '}
          <a href='tel:690 880 240'>tel. 690 880 240</a>,{' '}
          <a href='mailto:biuro@nidy.pl'>mail: biuro@nidy.pl</a>
        </div>
        <div>
          <strong>ARS OLD CAR – Muzeum motoryzacji</strong>{' '}
          <a href='tel:515 355 533'>tel. 515 355 533</a>,{' '}
          <a href='mailto:kontakt@arsoldcar.pl'>mail: kontakt@arsoldcar.pl</a>
        </div>
        <h2>Plan pobytu:</h2>
        <p>9.30–12.00 - ARS OLD CAR – Muzeum motoryzacji</p>
        <p>12.00-12.30 – przejazd do Spływ kajakiem Bastek</p>
        <p>
          12.30 – rozpoczęcie spływu na trasie Nida – Wolica. Po zakończeniu
          spływu ognisko z kiełbaskami na terenie przystani Spływ kajakiem
          Bastek
        </p>
      </TextWrapper>
    </Wrapper>
  </Layout>
);

export default KayakSpecialOfferPage;
