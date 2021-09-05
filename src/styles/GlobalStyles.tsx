import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html {
     font-size: ${({ theme }) => theme.fontSizes.initial};
   }
   
   body {
     margin: 0;
     min-width: 320px;
     background-color: ${({ theme }) => theme.colors.white};
     color: ${({ theme }) => theme.colors.black};
     font-family: ${({ theme }) => theme.fontFamilies.default};
   }
    
   a {
     text-decoration: none;
     color: ${({ theme }) => theme.colors.white};
   }
   
   *,
   *::before,
   *::after {
     box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     margin: 0;
     padding: 0;
   }
   
   ul {
     list-style-type: none;
   }
`;

export default GlobalStyles;
