import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Theme from 'components/Theme';
import Header from 'components/Layout/Header';
import Footer, { FOOTER_HEIGHT } from 'components/Layout/Footer';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  position: relative;
  min-height: 100vh;
  overflow-y: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'inherit')};
  overflow-x: hidden;
  height: ${({ isMenuOpen }) =>
    isMenuOpen ? `calc(870px + ${HEADER_HEIGHT})` : 'inherit'};

  @media (orientation: landscape) {
    overflow-y: ${({ isMenuOpen }) => (isMenuOpen ? 'inherit' : 'hidden')};
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    height: inherit;
    overflow-y: inherit;
  }
`;

const ContentWrapper = styled.div`
  padding: 50px 0 ${FOOTER_HEIGHT} 0;
`;

type Props = {
  children?: React.ReactNode;
};

type BurgerContextType =
  | [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  | [null, null];

export const BurgerContext = createContext<BurgerContextType>([null, null]);

const Layout = ({ children }: Props) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const BurgerContextValue: BurgerContextType = [isMenuOpen, toggleMenu];
  return (
    <Theme>
      <BurgerContext.Provider value={BurgerContextValue}>
        <Wrapper isMenuOpen={isMenuOpen}>
          <Header />
          <ContentWrapper>{children}</ContentWrapper>
          <Footer />
        </Wrapper>
      </BurgerContext.Provider>
    </Theme>
  );
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
