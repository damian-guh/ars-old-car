import styled from 'styled-components';
import Image from 'next/legacy/image';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

type Props = {
  index: number;
};

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  padding: 10px;
  margin: 20px 0;
  gap: 50px 20px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InfoSectionWrapper = styled.section<Props>`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  span {
    border-radius: 10px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    width: 350px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xxl} {
    width: 450px;
  }
`;

export const StyledImage = styled(Image)`
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ImageWrapper = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const NearbyTitleSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding-top: ${HEADER_HEIGHT};
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkGray};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    position: sticky;
    top: calc(${HEADER_HEIGHT} + 20px);
    z-index: 1;
    margin: 0;
    padding-top: 20px;
  }
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
