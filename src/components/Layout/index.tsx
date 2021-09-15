import React from 'react';
import styled from 'styled-components';
import Theme from 'components/Theme';
import Header from 'components/Layout/Header';
import Footer, { FOOTER_HEIGHT } from 'components/Layout/Footer';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  padding-bottom: ${FOOTER_HEIGHT};
`;

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <Theme>
    <Wrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </Wrapper>
  </Theme>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
