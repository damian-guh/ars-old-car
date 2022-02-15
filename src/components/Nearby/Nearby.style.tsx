import styled from 'styled-components';
import Image from 'next/image';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

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

export const InfoSectionWrapper = styled.section<Props>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: ${({ index }) => (index % 2 === 0 ? '1' : '2')};
    grid-row: 1;
  }
`;

export const MoreInfoLink = styled.a`
  background-color: ${({ theme }) => theme.colors.red};
  width: 150px;
  text-align: center;
  padding: 10px;
  align-self: center;
  cursor: pointer;

  :hover {
    color: inherit;
  }
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 300px;
  gap: 20px;

  span {
    border-radius: 10px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(2, 1fr);
    width: 850px;
  }
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
  transition-duration: 0.2s;

  :hover {
    transform: scale(1.2);
  }
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
  top: ${HEADER_HEIGHT};
  background-color: ${({ theme }) => theme.colors.darkGray};
  z-index: 1;
`;

export const NearbySectionTitle = styled.h1`
  text-align: center;
  padding: 15px;
`;

export const NearbyDesc = styled.p`
  max-width: 800px;
  padding: 0 10px 15px 10px;
`;

export const NearbyTitle = styled.h2`
  text-align: justify-all;
`;
