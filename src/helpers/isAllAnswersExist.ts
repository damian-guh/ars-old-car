import { checkCookies } from 'cookies-next';

const isAllAnswersExist = (questionAmount: number) => {
  for (let i = 1; i <= questionAmount; i += 1) {
    if (!checkCookies(`quiz-answer-${i}`)) return false;
  }
  return true;
};

export default isAllAnswersExist;
