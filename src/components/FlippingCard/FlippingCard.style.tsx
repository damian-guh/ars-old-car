import styled from 'styled-components';

export const FlippingCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.headerGray};
  padding: 0 20px;
  align-items: center;
  gap: 25px;
  justify-content: center;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FlippingCardWrapper = styled.div<{
  isFrontSide: boolean;
  isHasImage?: boolean;
}>`
  width: 300px;
  height: 300px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: rotateY(${({ isFrontSide }) => (isFrontSide ? '0' : '180deg')});
  background-color: ${({ theme }) => theme.colors.headerGray};
`;

const FlippingCardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;

export const FlippingCardFront = styled(FlippingCardFace)<{
  isHasImage?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.headerGray};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme, isHasImage }) =>
    isHasImage || isHasImage === undefined
      ? theme.colors.white
      : theme.colors.red};
`;

export const FlippingCardBack = styled(FlippingCardFace)<{
  isHasImage?: boolean;
}>`
  background-color: ${({ theme }) => theme.colors.headerGray};
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  font-size: ${({ theme, isHasImage }) =>
    isHasImage || isHasImage === undefined
      ? theme.fontSizes.initial
      : theme.fontSizes.xs};
`;
