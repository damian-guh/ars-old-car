import styled from 'styled-components';
import Image from 'next/legacy/image';
import Layout from 'components/Layout';
import kayakImage from '../../public/crystal-kayaks.jpg';

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
          Połącz historię z wodną przygodą – muzeum i spływ kajakowy w jednej
          wyprawie!
        </h1>
        <p>
          Chcesz przeżyć dzień pełen emocji, łącząc fascynującą historię
          motoryzacji z relaksem na wodzie? Muzeum Motoryzacji ARS OLD CAR oraz
          Crystal Kayaks Kielce zapraszają na wyjątkową wyprawę! Zwiedzisz
          niezwykłą kolekcję zabytkowych aut, a potem wyruszysz na spływ
          kajakowy na trasie Żelazny Most Chełstów Wojda – Przystań Odpłyń w
          Ostrowie. To doskonała okazja, by spędzić czas z rodziną, przyjaciółmi
          lub grupą zorganizowaną i skorzystać z 10% zniżki na bilet łączony!
        </p>
        <p>Co na Ciebie czeka?</p>
        <p>
          Najpierw wizyta w ARS OLD CAR, gdzie odkryjesz perełki motoryzacji,
          takie jak Citroën 2CV, futurystyczny AMI 6 czy gangsterski BL 11. Na
          miejscu czeka również największa w Polsce kolekcja samochodów
          szydełkowanych! Oprócz tego poczujesz adrenalinę podczas off-roadowej
          przejażdżki Żukiem, przeżyjesz tajemniczą podróż po Willi Hempla oraz
          wzniesiesz się nad Chęcinami w wirtualnym locie balonem w technologii
          VR.
        </p>
        <p>
          Po zwiedzeniu muzeum czas na relaks i kontakt z naturą! Spływ kajakowy
          po Czarnej Nidzie to doskonała okazja, by oderwać się od codzienności
          i podziwiać malownicze krajobrazy. Na zakończenie dnia czeka na Ciebie
          ognisko z kiełbaskami na terenie Przystani Odpłyń w Ostrowie.
        </p>
        <p>Plan dnia:</p>
        <p>⏰ 9:30–12:00 – Zwiedzanie Muzeum Motoryzacji ARS OLD CAR</p>
        <p>⏰ 12:00–12:30 – Przejazd do Przystani Odpłyń</p>{' '}
        <p>
          ⏰ 12:30 – Spływ kajakowy na trasie Żelazny Most Chełstów Wojda –
          Przystań Odpłyń Ostrów
        </p>
        <p>🔥 Po spływie – Ognisko z kiełbaskami</p>
        <p>Zarezerwuj wcześniej:</p>
        <div>
          <strong>Crystal Kayaks Kielce</strong>{' '}
          <a href='tel:789 117 617'>tel. 789 117 617</a>,{' '}
          <a href='mailto:crystalkayakskielce@wp.pl'>
            mail: crystalkayakskielce@wp.pl
          </a>
        </div>
        <div>
          <strong>ARS OLD CAR – Muzeum motoryzacji</strong>{' '}
          <a href='tel:515 355 533'>tel. 515 355 533</a>,{' '}
          <a href='mailto:kontakt@arsoldcar.pl'>mail: kontakt@arsoldcar.pl</a>
        </div>
        <p>
          Oferta skierowana do grup powyżej 10 osób. Nie zwlekaj – połącz
          motoryzacyjną historię z wodną przygodą i przeżyj niezapomniany dzień
          pełen atrakcji!
        </p>
      </TextWrapper>
    </Wrapper>
  </Layout>
);

export default KayakSpecialOfferPage;
