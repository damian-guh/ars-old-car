import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;
  height: calc(100vh - ${HEADER_HEIGHT});

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
  padding: 15px;
`;

export const HeroDesc = styled.p`
  font-style: italic;
  padding: 20px 10px;
  text-align: center;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;
