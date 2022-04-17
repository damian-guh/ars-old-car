import Layout from 'components/Layout';
import styled from 'styled-components';
import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
import FlippingCard from 'components/FlippingCard';
import { FLIPPING_CARD_CHECINY_TOURING } from 'utils/constants/flippingCardsContent';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 25px;
  width: 100%;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 3fr 1fr;
  }
`;

const QrInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 50px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const FlippingCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: calc(100vh - ${HEADER_HEIGHT});
  top: calc(${HEADER_HEIGHT} + 10px);
  right: 0;
  background-color: ${({ theme }) => theme.colors.headerGray};
  width: 100%;
  padding: 10px;
`;

const QrPage = () => (
  <Layout>
    <Wrapper>
      <QrInfoSection>
        <p>
          Witaj w świecie konkursów QR w ARS OLD CAR! Po zakończeniu konkursu
          czekają na Ciebie nagrody.
        </p>
        <p>Jak je zdobyć za chwilę się tego dowiesz.</p>
        <p>
          Konkursy są dostępne po przybyciu do muzeum, a do rozpoczęcia gry
          potrzebny jest jedynie Twój telefon i zainstalowana aplikacji do
          odczytu kodów QR.
        </p>
        <p>
          Są CZTERY konkursy i wszystkie są dla Ciebie. Odpowiedz po kolei na
          wszystkie pytania w każdym z konkursów (w każdym z nich jest po 6
          pytań).
        </p>
        <p>
          Jeśli na którykolwiek odpowiedziałeś 6/6 to właśnie wygrałeś nagrodę,
          która czeka na Ciebie w kasie muzeum.
        </p>
        <p>Powodzenia!</p>
      </QrInfoSection>
      <FlippingCardSection>
        <FirefighterTruckAttraction />
        <FlippingCard content={FLIPPING_CARD_CHECINY_TOURING} />
      </FlippingCardSection>
    </Wrapper>
  </Layout>
);

export default QrPage;
