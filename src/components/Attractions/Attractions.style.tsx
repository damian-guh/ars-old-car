import styled from 'styled-components';
import Image from 'next/image';

export const AttractionsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: center;
  padding: 40px 10px 10px 10px;
  gap: 25px;

  @media screen and ${({ theme }) => theme.screenSizes.sm} {
    grid-template-columns: repeat(2, minmax(300px, 500px));
    grid-template-rows: repeat(1, 1fr);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 250px;
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;
