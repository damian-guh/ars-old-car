import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';
import { FOOTER_HEIGHT } from 'components/Layout/Footer';

export const ReservationPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
  }
`;

export const PricingAndInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: justify-all;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 50%;
  }
`;

export const PricingAndInfoText = styled.p<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 3px;
`;

export const FormSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 50%;
  }
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 5px;
  text-align: center;
`;
