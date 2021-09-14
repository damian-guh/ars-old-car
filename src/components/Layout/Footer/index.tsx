import Link from 'next/link';
import styled from 'styled-components';
import { APP_NAME, APP_AUTHOR } from 'utils/constants';

export const FOOTER_HEIGHT = '80px';

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
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
`;

const LawSection = styled.section`
  display: flex;
  gap: 25px;

  a {
    color: ${({ theme }) => theme.colors.white};

    :hover {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

const AuthorSection = styled.section`
  display: none;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    display: block;
  }
`;

const CopyrightSection = styled.section``;

const Footer = () => (
  <StyledFooter>
    <LawSection>
      <Link href='/regulamin'>Regulamin</Link>
      <Link href='/polityka-prywatności'>Polityka prywatności</Link>
    </LawSection>
    <CopyrightSection>© {APP_NAME}</CopyrightSection>
    <AuthorSection>Realizacja: {APP_AUTHOR}</AuthorSection>
  </StyledFooter>
);

export default Footer;
