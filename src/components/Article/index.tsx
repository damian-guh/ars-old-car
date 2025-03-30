import styled from 'styled-components';
import Image from 'next/legacy/image';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 45px;
  padding-top: ${HEADER_HEIGHT};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 3fr 1fr;
    padding-top: 50px;
  }
`;

export const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 45px;
`;

export const Article = styled.article`
  max-width: 930px;
  font-size: ${({ theme }) => theme.fontSizes.md};

  > * {
    margin: 20px;
  }
`;

export const ArticleTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
`;

export const ImagesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  gap: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
  }
`;

export const FlippingCardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: calc(${HEADER_HEIGHT} + 10px);
  right: 0;
  background-color: ${({ theme }) => theme.colors.headerGray};
  width: 100%;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;

  span {
    border-radius: 10px;
  }
`;

export const StyledImage = styled(Image)`
  transition-duration: 0.2s;

  :hover {
    transform: scale(1.2);
  }
`;
