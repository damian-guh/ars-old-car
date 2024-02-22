import styled from 'styled-components';
import Image from 'next/legacy/image';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 45px;
  width: 100%;
  padding-top: ${HEADER_HEIGHT};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 3fr 1fr;
    padding-top: 50px;
  }
`;

export const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  gap: 50px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(2, 400px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 200px;

  span {
    border-radius: 10px;
  }
`;

export const FlippingCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: calc(100vh - ${HEADER_HEIGHT});
  top: calc(${HEADER_HEIGHT} + 10px);
  right: 0;
  background-color: ${({ theme }) => theme.colors.headerGray};
  width: 100%;
  padding: 10px;
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
  transition-duration: 0.2s;

  :hover {
    transform: scale(1.2);
  }
`;

export const GalleryDescWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  background-color: ${({ theme }) => theme.colors.darkGray};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    position: sticky;
    top: calc(${HEADER_HEIGHT} + 20px);
    z-index: 3;
  }
`;

export const GalleryDesc = styled.p`
  max-width: 700px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: justify;
  padding: 15px;
`;
