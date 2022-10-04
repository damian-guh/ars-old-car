import Link from 'next/link';
import styled from 'styled-components';
import Logo from 'components/Layout/Logo';
import { FaFacebookF as FacebookIcon } from '@react-icons/all-files/fa/FaFacebookF';
import { AiOutlineInstagram as InstagramIcon } from '@react-icons/all-files/ai/AiOutlineInstagram';

export const FOOTER_HEIGHT = '260px';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${FOOTER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.headerGray};
  color: ${({ theme }) => theme.colors.white};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const LawSection = styled.section`
  display: flex;
  gap: 25px;
  padding: 10px;
`;

const OpeningHoursSection = styled.section`
  padding: 10px;
`;

const CopyrightAndSocialSection = styled.section`
  display: flex;
  align-items: center;
  gap: 25px;

  div svg {
    width: 30px;
    margin: 5px;
  }

  svg {
    height: 100%;
    max-width: 100px;
  }
`;

const Footer = () => (
  <StyledFooter>
    <LawSection>
      <a href='/regulamin.pdf' target='_blank'>
        Regulamin
      </a>
    </LawSection>
    <OpeningHoursSection>
      <p>Muzeum czynne: od 15.04 do 01.10.2023</p>
      <p>Piątek – Niedziela godz. 9:30-17:00</p>
      <p>
        (Wejście na wystawę 2CV World o godzinie: 10:00, 11:00, 12:00, 13:00,
        14:00, 15:00, 16:00)
      </p>
      <p>
        Poniedziałek - Czwartek – czynne dla rezerwacji grup zorganizowanych -
        minimum 10 osób
      </p>
    </OpeningHoursSection>
    <CopyrightAndSocialSection>
      <Logo />
      <div>
        <a
          href='https://www.facebook.com/ARS-OLD-CAR-Muzeum-Motoryzacji-137529865169438'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.instagram.com/ars_old_car/'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon />
        </a>
      </div>
      <Link href='/rezerwacje'>Rezerwacje</Link>
    </CopyrightAndSocialSection>
  </StyledFooter>
);

export default Footer;
