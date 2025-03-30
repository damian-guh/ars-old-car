import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.headerGray};
  padding: 20px;
`;

export const PartnersLogoWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding: 20px;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 80px;
`;
