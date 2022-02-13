import styled from 'styled-components';
import { theme as staticTheme } from 'styles/theme';
import { Form } from 'formik';

const handleColor = (color?: string) => {
  const { colors } = staticTheme;
  switch (color) {
    case 'yellow':
      return colors.yellow;
    case 'blue':
      return colors.blue;
    case 'green':
      return colors.green;
    case 'orange':
      return colors.orange;
    default:
      return colors.red;
  }
};

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
  border-bottom: 2px solid ${({ color }) => handleColor(color)};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-family: ${({ theme }) => theme.fontFamilies.default};
  outline: none;

  :disabled {
    color: ${({ theme }) => theme.colors.gray};
  }

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
  background-color: ${({ color }) => handleColor(color)};
  font-family: ${({ theme }) => theme.fontFamilies.default};
  color: ${({ theme, color }) =>
    color === 'yellow' ? theme.colors.black : theme.colors.white};
  letter-spacing: 1px;
  border: none;
  cursor: pointer;

  :disabled {
    text-decoration: line-through;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 280px;
  border: none;
  padding: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.red};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white};
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
  margin: -15px 0 20px 0;
`;
