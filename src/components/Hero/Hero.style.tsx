import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const HeroWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  margin-top: ${HEADER_HEIGHT};

  .carousel {
    grid-column: 1 / -1;
    z-index: 5;
    min-width: 0;

    p {
      text-align: center;
      background-color: ${({ theme }) => theme.colors.headerGray};
    }
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
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
  height: 55px;
  padding: 20px;
  text-align: center;
  line-height: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const HeroTextAndButtonsWrapper = styled.section`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export const HeroPostsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 25px 0;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    gap: 0 100px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    gap: 0 150px;
  }
`;

export const HeroSaleOffer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 23, 22, 0.95);
  padding: 20px;
  gap: 5px;
  cursor: pointer;
`;

export const HeroSaleOfferTitle = styled.h3`
  color: red;
`;

export const ReviewTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  background-color: ${({ theme }) => theme.colors.headerGray};
  text-align: center;
  padding: 10px 0;
`;

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 5px;
  max-width: 900px;
  margin: 0 auto;
`;
