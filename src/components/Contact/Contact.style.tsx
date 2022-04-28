import styled, { css } from 'styled-components';
import { FiPhone as PhoneIcon } from '@react-icons/all-files/fi/FiPhone';
import { FiMail as MailIcon } from '@react-icons/all-files/fi/FiMail';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 50px 0;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: repeat(3, 1fr);
    padding: 30px;
  }
`;

export const FlippingCardsSection = styled.section`
  display: flex;
  flex-direction: column;
  grid-row: 3/4;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerGray};
  padding: 0 20px;
  align-items: center;
  gap: 25px;
  justify-content: center;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    align-items: flex-start;
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;

export const MuseumDataSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 10px;
  width: 275px;
  height: 80px;
  font-size: ${({ theme }) => theme.fontSizes.lg};

  button {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.md};
    background-color: transparent;
    font-family: ${({ theme }) => theme.fontFamilies.default};
    border: none;
    :hover {
      color: ${({ theme }) => theme.colors.red};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const AddressText = styled.p`
  grid-column: 1/3;
  text-align: center;
`;

const iconsStyles = css`
  color: ${({ theme }) => theme.colors.red};
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  ${iconsStyles}
`;

export const StyledMailIcon = styled(MailIcon)`
  ${iconsStyles}
`;
