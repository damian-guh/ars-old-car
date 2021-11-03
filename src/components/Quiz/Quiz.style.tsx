import styled from 'styled-components';
import { IoLocationSharp as LocationIcon } from '@react-icons/all-files/io5/IoLocationSharp';
import { theme as staticTheme } from 'styles/theme';

const QUIZ_HEADER_HEIGHT = '130px';

export const QuizWrapper = styled.section`
  height: 100vh;
`;

export const QuizContentWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${QUIZ_HEADER_HEIGHT});
`;

export const QuizHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${QUIZ_HEADER_HEIGHT};

  svg {
    height: 90%;
  }
`;

export const QuizLocationError = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;
  height: 100%;
`;

export const QuizLocationErrorText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  text-align: center;
`;

export const StyledLocationIcon = styled(LocationIcon)`
  fill: ${({ theme }) => theme.colors.red};
  font-size: 50px;
`;

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

export const QuizQuestionAndAnswerSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const QuizQuestion = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

export const QuizAnswerButton = styled.button`
  width: 280px;
  height: 70px;
  padding: 5px;
  margin: 10px;
  background-color: ${({ color }) => handleColor(color)};
  font-size: ${({ theme, value }) =>
    String(value).length < 12 ? theme.fontSizes.md : theme.fontSizes.xs};
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

export const QuizInfoSpan = styled.span`
  text-align: center;
  padding: 10px;
`;
