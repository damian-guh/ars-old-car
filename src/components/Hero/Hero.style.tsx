import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`;

export const HeroActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    flex-direction: row;
  }
`;

export const HeroActionButton = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  width: 130px;
  height: 50px;
  padding: 20px;
  text-align: center;
  line-height: 100%;

  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const HeroTextAndButtonsWrapper = styled.section`
  position: absolute;
  left: 50%;
  top: calc(${HEADER_HEIGHT} + 10%);
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  z-index: 3;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    top: calc(${HEADER_HEIGHT} + 5%);
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  text-align: center;
  padding: 15px;
`;

export const HeroDesc = styled.p`
  font-style: italic;
  padding: 20px 15px;
  max-width: 900px;
  text-align: justify;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT});
`;
