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
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 50%;
  }
`;

export const PricingAndInfoText = styled.p<{ bold: boolean }>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: ${({ bold }) => (bold ? '10px' : '1px')};
`;

export const FormSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
  justify-content: center;
  padding: 50px 5px;
  background-color: ${({ theme }) => theme.colors.headerGray};
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 15px;
  margin-bottom: 10px;
  text-align: center;
`;
