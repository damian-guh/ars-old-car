import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   html {
     font-size: ${({ theme }) => theme.fontSizes.initial};
   }
   
   body {
     margin: 0;
     min-width: 320px;
     background-color: ${({ theme }) => theme.colors.darkGray};
     color: ${({ theme }) => theme.colors.white};
     font-family: ${({ theme }) => theme.fontFamilies.default};
   }
    
   a {
     text-decoration: none;
     color: ${({ theme }) => theme.colors.white};

     :hover {
       color: ${({ theme }) => theme.colors.red};
     }
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
   
   .react-datepicker-wrapper {
     width: inherit;
   }

   .react-datepicker__day--keyboard-selected, .react-datepicker__day--keyboard-selected:hover, .react-datepicker__month-text--keyboard-selected:hover, .react-datepicker__quarter-text--keyboard-selected:hover, .react-datepicker__year-text--keyboard-selected:hover, .react-datepicker__day--selected, .react-datepicker__day--selected:hover, .react-datepicker__time-list-item--selected, .react-datepicker__time-list-item--selected:hover {
     background-color: ${({ theme }) => theme.colors.red} !important;
   }
   
   .react-datepicker__input-container {
     display: flex;
     flex-direction: column;
     align-items: center;
   }

     .react-datepicker__time-list-item--disabled {
     text-decoration: line-through;
       text-decoration-color: ${({ theme }) => theme.colors.red};
   }

`;

export default GlobalStyles;
