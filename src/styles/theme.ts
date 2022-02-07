export const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    red: '#e21f2c',
    gray: '#5e5959',
    yellow: '#e5ff00',
    blue: '#0051ff',
    green: '#00ff51',
    orange: '#ff8c00',
  },
  fontSizes: {
    initial: '15px',
    xs: '0.9rem',
    sm: '1.05rem',
    md: '1.2rem',
    lg: '1.3rem',
    xl: '1.9rem',
    xxl: '2.3rem',
  },
  fontFamilies: {
    default: 'Poppins, sans-serif',
  },
  screenSizes: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
    xxl: '(min-width: 1600px)',
  },
} as const;

export type ThemeType = typeof theme;
