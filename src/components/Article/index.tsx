import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 45px;
  padding: 30px;
`;

export const Article = styled.article`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const ArticleTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;
`;
