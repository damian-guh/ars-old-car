import type { NextPage } from 'next';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import Layout from 'components/Layout';
import klotyldaImage from '../../public/klotylda.png';
import willaHemplaImage from '../../public/willa-hempla.png';
import jaskiniapiekloImage from '../../public/jaskiniavr.png';
import balonVrImage from '../../public/balonvr.png';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 20px;
  margin-top: 100px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  gap: 20px;

  a {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    padding: 5px;
    font-weight: bold;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    padding: 15px;
  }

  > * {
    max-width: 1100px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    margin-top: 0;
    grid-template-columns: 3fr 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`;

const StyledImage = styled(Image)`
  border-radius: 7px;
`;

const TextAndImagesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const VRPage: NextPage = () => (
  <Layout>
    <Wrapper>
      <TextAndImagesWrapper>
        <h1>Tajemnica Willi Hempla</h1>
        <p>
          Witajcie miłośnicy tajemniczych historii! Czy kiedykolwiek
          zastanawialiście się, co kryje się za zamkniętymi drzwiami opuszczonej
          willi? Teraz macie okazję to odkryć dzięki wirtualnemu doświadczeniu
          VR &quot;Tajemnica Willi Hempla&quot;, dostępnemu w ARS OLD CAR -
          Muzeum Motoryzacji !
        </p>
        <p>
          Wirtualne zwiedzanie wiernie odwzorowanej ponad 100-letniej willi
          pozwoli Wam poczuć się, jakbyście byli tam osobiście. Znajdziecie się
          w samym sercu tajemniczej historii właściciela willi - Joachima
          Hempla. Będziecie mieć szansę odkryć jego fascynujący życiorys i
          poznać sekrety, które skrywała ta tajemnicza willa. Co czeka na Was za
          zamkniętymi drzwiami? To już tylko kwestia czasu, zanim to odkryjecie!
        </p>
        <p>
          Doświadczenie dostępne dla każdego. Przygotujcie się na niezapomnianą
          podróż, która z pewnością dostarczy Wam wielu emocji i wrażeń. Czekamy
          na Was w ARS OLD CAR - Muzeum Motoryzacji, abyście mogli doświadczyć
          tajemniczej historii &quot;Tajemnicy Willi Hempla&quot;!
        </p>
        <h1>Podniebna Odyseja - Lot Balonem nad Chęcinami </h1>
        <p>
          Przygotuj się na niezapomnianą przygodę i wzbij się w powietrze ponad
          malowniczymi Chęcinami! Nasz lot balonem to wyjątkowe doświadczenie, w
          którym dzięki nowoczesnej technologii podróż nabiera zupełnie nowego
          wymiaru. Piękne widoki, w których dominują zielone wzgórza,
          majestatyczne ruiny zamku oraz urokliwe zakątki regionu, z pewnością
          Cię oczarują.
        </p>
        <p>
          To niezwykła okazja, aby spojrzeć na świat z zupełnie nowej
          perspektywy. Dzięki zastosowaniu technologii VR doświadczenie staje
          się jeszcze bardziej intensywne i autentyczne. Subtelne efekty
          wizualne przeniosą Cię w niepowtarzalny klimat regionu, sprawiając, że
          każda chwila pozostanie w pamięci.
        </p>
        <p>
          Lot balonem nad Chęcinami to także doskonała szansa, by oderwać się od
          zgiełku codziennego życia i zrelaksować, przeżywając coś naprawdę
          wyjątkowego. To emocje, które łączą przyjemność z fascynującym
          odkrywaniem nieznanych obszarów. Nasza oferta to nie tylko niezwykłe
          doświadczenie, ale również możliwość zyskania nowych inspiracji, które
          będą Ci towarzyszyć przez długi czas. Pozwól sobie na odrobinę
          niezwykłości!
        </p>
        <h1>Odkryj mroczne tajemnice Jaskini Piekło</h1>
        <p>
          Jaskinia Piekło pod Skibami to miejsce owiane tajemnicą i legendami,
          które od wieków intryguje zarówno mieszkańców, jak i turystów. Według
          ludowych podań, z jej czeluści miały wylatywać diabły, by czynić zło
          na świecie.
        </p>
        <p>
          To właśnie te opowieści zainspirowały twórców interaktywnego filmu
          &quot;Tajemnice Jaskini Piekło&quot;, w którym gracz wciela się w rolę
          odważnego doktora, mającego na celu rozwikłanie zagadki zniknięcia
          małej dziewczynki z pobliskiej wioski.
        </p>
        <p>
          Twoje decyzje zadecydują o powodzeniu misji ratunkowej lub zagubieniu
          się w labiryncie jaskini na zawsze. Każdy krok w głąb
          &quot;Piekła&quot; odkrywa przed Tobą nowe sekrety, a atmosfera grozy
          i napięcia towarzyszy Ci na każdym etapie podróży. Czy zdołasz stawić
          czoła pradawnym siłom zła i ocalić niewinne życie? Los dziewczynki
          spoczywa w Twoich rękach, a każda decyzja niesie ze sobą konsekwencje.
          Przygotuj się na emocjonującą przygodę, która wystawi na próbę Twoją
          odwagę i determinację.
        </p>
        <h1>Przygoda w Saint Tropez</h1>
        <p>
          Witajcie podróżnicy! Czy kiedykolwiek marzyliście o tym, żeby zanurzyć
          się w pięknej scenerii Francji, poczuć wiatr we włosach i wyruszyć w
          szaloną przygodę samochodową? Teraz to wszystko jest możliwe dzięki
          wirtualnemu doświadczeniu VR &quot;Przygoda w Saint Tropez&quot;
          dostępnemu w ARS OLD CAR - Muzeum Motoryzacji!
        </p>
        <p>
          Przygotujcie się na niezapomnianą podróż w towarzystwie siostry
          Klotyldy i Żandarma, którzy poprowadzą Was przez urocze uliczki Saint
          Tropez. Odwiedzicie najważniejsze zabytki miasta, podziwiając
          malownicze krajobrazy Francji w całej ich okazałości. A to jeszcze nie
          wszystko! W grze z Panią Burmistrz, będziecie mieli okazję
          przetestować swoje umiejętności w bule.
        </p>
        <p>
          Nie przegapcie szansy, aby wziąć udział w tej niezwykłej przygodzie,
          która z pewnością dostarczy Wam mnóstwo wrażeń i emocji! Przygoda jest
          dostępna tylko w ARS OLD CAR i jest podzielona na dwie historie: Część
          1: &quot;Siostro zwolnij!&quot; oraz Część 2: &quot;Wycieczka po Saint
          Tropez&quot;, co sprawia, że jest to wspaniała okazja na spędzenie
          czasu z rodziną i przyjaciółmi. Czekamy na Was w ARS OLD CAR.
        </p>
      </TextAndImagesWrapper>
      <TextAndImagesWrapper>
        <ImageWrapper>
          <StyledImage
            src={willaHemplaImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='willa hempla'
          />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={balonVrImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='balon vr'
          />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={jaskiniapiekloImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='jaskinia piekło'
          />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={klotyldaImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='klotylda vr'
          />
        </ImageWrapper>
      </TextAndImagesWrapper>
    </Wrapper>
  </Layout>
);

export default VRPage;
