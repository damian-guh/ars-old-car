import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 280px;
  height: 35px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fontFamilies.default};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 380px;
  }
`;

export const StyledButton = styled.button.attrs(({ type }) => ({
  type,
}))`
  width: 95px;
  height: 40px;
  padding: 5px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fontFamilies.default};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
`;

export const StyledTextArea = styled.textarea`
  width: 280px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  resize: none;
  margin: 20px;
  font-family: ${({ theme }) => theme.fontFamilies.default};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    width: 380px;
  }
`;

export const InputError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.red};
`;
