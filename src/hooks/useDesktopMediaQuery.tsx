import { useMediaQuery } from 'react-responsive';
import { theme } from 'styles/theme';

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: theme.screenSizes.xl });

export default useDesktopMediaQuery;
