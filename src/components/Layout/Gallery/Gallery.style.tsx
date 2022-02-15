import styled from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 300px;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
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
`;

export const GalleryDesc = styled.p`
  max-width: 700px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: justify;
  padding: 15px;
`;
