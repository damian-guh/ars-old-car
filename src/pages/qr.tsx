import Layout from 'components/Layout';
import styled from 'styled-components';

const QrInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin: 50px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const QrPage = () => (
  <Layout>
    <QrInfoSection>
      <p>
        Witaj w świecie konkursów QR w ARS OLD CAR! Po zakończeniu konkursu
        czekają na Ciebie nagrody.
      </p>
      <p>Jak je zdobyć za chwilę się tego dowiesz.</p>
      <p>
        Konkursy są dostępne po przybyciu do muzeum, a do rozpoczęcia gry
        potrzebny jest jedynie Twój telefon i zainstalowana aplikacji do odczytu
        kodów QR.
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
  </Layout>
);

export default QrPage;
