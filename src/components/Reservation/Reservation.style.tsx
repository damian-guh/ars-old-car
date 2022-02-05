import styled from 'styled-components';

export const ReservationPageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
  }
`;

export const PricingAndInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify-all;
  padding: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 50%;
  }
`;

export const PricingAndInfoText = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin: 5px;
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
