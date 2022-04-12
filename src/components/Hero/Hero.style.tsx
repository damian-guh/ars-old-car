import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const HeroWrapper = styled.section`
  height: calc(100vh - ${HEADER_HEIGHT});
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const HeroTextWrapper = styled.section`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: center;
  padding: 15px;
`;

export const HeroDesc = styled.p`
  font-style: italic;
  padding: 20px 10px;
  max-width: 900px;
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;
