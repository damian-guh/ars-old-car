import styled from 'styled-components';
import Image from 'next/legacy/image';
import Layout from 'components/Layout';
import calendarImage from '../../public/calendar.png';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 25px;
  margin-top: 100px;
  gap: 15px;
  min-height: 100vh;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  gap: 15px;
  padding: 50px 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
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

const CalendarEventPage = () => (
  <Layout>
    <Wrapper>
      <ImageWrapper>
        <Image
          src={calendarImage}
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          quality={90}
          alt='kajak i 2cv'
        />
        <Overlay />
      </ImageWrapper>
      <TextWrapper>
        <h1>Kalendarium ARS OLD CAR 2024</h1>
        <p>
          14.04.2024 - Otwarcie sezonu KIELECKIE KLASYKI AUTO&MOTO w RCNT
          Podzamcze
        </p>
        <p>19.04.2024 – Otwarcie sezonu ARS OLD CAR</p>
        <p>
          25.05.2024- Zlot zabytkowych samochodów Citroen, Kazimierz Dolny nad
          Wisłą
        </p>
        <p>30.05 - 1.06.2024 – Rajd Koguta, OŁAWA-MRĄGOWO</p>
        <p>
          21.07.2024 - Obchody 65-rocznicy tragicznej śmierci załogi rajdu
          Adriatyk, CHĘCINY
        </p>
        <p>11.08.2024 – MOTOPIKNIK, Muzeum Wsi Kieleckiej w Tokarni</p>
        <p>14 - 18.08.2024 - 17 Światowy Zlot Citroena, TORUŃ</p>
      </TextWrapper>
    </Wrapper>
  </Layout>
);

export default CalendarEventPage;
