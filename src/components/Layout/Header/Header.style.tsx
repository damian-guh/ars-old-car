import styled from 'styled-components';
import { BURGER_DIMENSIONS } from 'components/Layout/Menu/Burger/Burger.style';

export const HEADER_HEIGHT = '95px';

export const Wrapper = styled.header`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.headerGray};
  inset: 0;
  display: grid;
  grid-template-columns: calc(2 * ${BURGER_DIMENSIONS}) 1fr;
  justify-items: center;
  align-items: center;
  height: ${HEADER_HEIGHT};
  z-index: 10;

  svg {
    height: 100%;
    max-width: 100px;
    cursor: pointer;
    position: absolute;
    overflow: visible;
    left: 50%;
    transform: translateX(-50%) scale(1.2);
    z-index: 30;
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 5fr;
  }
`;

export const LogoWrapper = styled.div`
  height: ${HEADER_HEIGHT};
  width: 100%;
  position: relative;
  grid-column: 2/3;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: 1/2;
  }
`;
