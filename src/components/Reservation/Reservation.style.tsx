import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';
import { FOOTER_HEIGHT } from 'components/Layout/Footer';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  width: 100%;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 3fr 1fr;
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

export const FormSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  justify-content: center;
  padding: ${HEADER_HEIGHT} 5px 50px 5px;
  background-color: ${({ theme }) => theme.colors.headerGray};

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    padding-top: 50px;
  }
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 15px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledInfoP = styled.p`
  margin: 0 0 30px 0;
  text-align: justify;
  padding: 0 25px;
`;
