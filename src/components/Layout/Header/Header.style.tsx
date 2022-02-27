import styled, { keyframes } from 'styled-components';
import { BURGER_DIMENSIONS } from 'components/Layout/Menu/Burger/Burger.style';

export const HEADER_HEIGHT = '95px';

export const Wrapper = styled.header`
  position: sticky;
  background-color: ${({ theme }) => theme.colors.headerGray};
  inset: 0;
  display: grid;
  grid-template-columns: calc(2 * ${BURGER_DIMENSIONS}) 1fr;
  grid-template-rows: 2fr 1fr;
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

const countdownAnimation = ({
  red,
  white,
}: {
  red: string;
  white: string;
}) => keyframes`
  from {
    color: ${white};
  }
  to {
    color: ${red};
  }
`;

export const CountdownSpan = styled.span`
  background-color: ${({ theme }) => theme.colors.headerGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  width: 100%;
  grid-column: 1/3;
  text-align: center;
  animation: 3s ${({ theme }) => countdownAnimation(theme.colors)} infinite
    alternate;
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
