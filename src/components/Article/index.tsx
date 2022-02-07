import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 45px;
  padding: 20px;
  width: 100%;
`;

export const Article = styled.article`
  max-width: 1000px;
  font-size: ${({ theme }) => theme.fontSizes.md};
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

export const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
`;
