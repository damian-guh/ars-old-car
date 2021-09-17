import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Theme from 'components/Theme';
import Header from 'components/Layout/Header';
import Footer, { FOOTER_HEIGHT } from 'components/Layout/Footer';

const Wrapper = styled.div<{ isMenuOpen: boolean }>`
  position: relative;
  min-height: 100vh;
  overflow-y: ${({ isMenuOpen }) => (isMenuOpen ? 'hidden' : 'inherit')};
  height: ${({ isMenuOpen }) => (isMenuOpen ? '100vh' : 'inherit')};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    height: inherit;
  }
`;

const ContentWrapper = styled.div`
  padding-bottom: ${FOOTER_HEIGHT};
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
