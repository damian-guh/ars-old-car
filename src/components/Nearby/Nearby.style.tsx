import styled from 'styled-components';
import Image from 'next/image';

type Props = {
  index: number;
};

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 10px;
  gap: 50px;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 300px;
  gap: 20px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(2, 1fr);
    width: 850px;
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;

export const ImageWrapper = styled.div<Props>`
  position: relative;
  height: 200px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: ${({ index }) => (index % 2 === 0 ? '2' : '1')};
  }
`;

export const NearbyTitleSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  margin: 30px;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

export const NearbySectionTitle = styled.h1`
  text-align: center;
  padding: 15px;
`;

export const NearbyDesc = styled.p`
  max-width: 800px;
  padding: 15px 5px 5px 5px;
`;

export const NearbyTitle = styled.h2<Props>`
  text-align: center;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: ${({ index }) => (index % 2 === 0 ? '1' : '2')};
    grid-row: 1;
  }
`;
