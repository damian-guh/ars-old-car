import Link from 'next/link';
import styled from 'styled-components';
import { APP_AUTHOR } from 'utils/constants';
import Logo from 'components/Layout/Logo';
import { FaFacebookF as FacebookIcon } from '@react-icons/all-files/fa/FaFacebookF';
import { AiOutlineInstagram as InstagramIcon } from '@react-icons/all-files/ai/AiOutlineInstagram';

export const FOOTER_HEIGHT = '120px';

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

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const LawSection = styled.section`
  display: flex;
  gap: 25px;
`;

const AuthorSection = styled.section`
  display: none;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    display: block;
  }
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
      <Link href=''>Regulamin</Link>
      <Link href=''>Polityka prywatności</Link>
    </LawSection>
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

    <AuthorSection>Realizacja: {APP_AUTHOR}</AuthorSection>
  </StyledFooter>
);

export default Footer;
