import styled, { keyframes } from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

const textAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
   
    opacity: 1;
  }
`;

export const HeroWrapper = styled.section`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT});
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Text = styled.p`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 15px;
  z-index: 3;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  animation: ${textAnimation} ease-in-out 2s;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;
