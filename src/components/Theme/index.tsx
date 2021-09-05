import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';

type Props = {
  children: React.ReactNode;
};

const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
