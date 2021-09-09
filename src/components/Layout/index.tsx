import React from 'react';
import Theme from 'components/Theme';
import Header from 'components/Layout/Header';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <Theme>
    <Header />
    {children}
  </Theme>
);

Layout.defaultProps = {
  children: null,
};

export default Layout;
