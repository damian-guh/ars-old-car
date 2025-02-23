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
        <h1>Kalendarium ARS OLD CAR 2025</h1>
        <p>24.04. – 4 EDYCJA Żuk i Kaczka zgrana paczka w ARS OLD CAR</p>
        <p>26-27.04. – Targi Slow Travel – TARGI KIELCE</p>
        <p>29.04. – Otwarcie sezonu ARS OLD CAR</p>
        <p>27.05-8.06 – Budzenie Sienkiewki Kielce</p>
        <p>31.05-1.06 – Lego Fest – Targi Kielce</p>
        <p>
          31.05-1.06 – Pod Szewronami. Zlot Citroenów Kazimierz Dolny nad Wisłą.
        </p>
        <p>8.06. – VIII Ogólnopolski Auto-Moto Weteran Radomsko</p>
        <p>
          15.06. – Miechowski Zlot Klasyków i ich miłośników w PRL-u – Miechów
        </p>
        <p>12-13.07 – Dub It Tuning Festiwal – Targi Kielce</p>
        <p>17.05 – Śladami Hempla Rajd Nordic Walking – ARS OLD CAR</p>
        <p>
          17-20.07. – XVII Ogólnopolski zlot Citroenów Zabytkowych – Rzeszów -
          Łańcut
        </p>
        <p>25-27.07 – Zlot Gwiaździsty śladami Langera i Nahorskiego Chęciny</p>
        <p>
          26.07. – Obchody 66-rocznicy wypadku pod Chęcinami, Konferencja –
          Ostatni wyścig. Wspomnienie wydarzeń z 22.07.1959.
        </p>
        <p>29.07-3.08. – 25 Światowy Zlot Citroena 2CV w Słowenii</p>
        <p>10.08 – Motopiknik – Skansen w Tokarni</p>
      </TextWrapper>
    </Wrapper>
  </Layout>
);

export default CalendarEventPage;
