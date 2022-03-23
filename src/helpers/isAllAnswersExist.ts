import { checkCookies } from 'cookies-next';

const isAllAnswersExist = (questionAmount: number, cookieName: string) => {
  for (let i = 1; i <= questionAmount; i += 1) {
    if (!checkCookies(`${cookieName}${i}`)) return false;
  }
  return true;
};

export default isAllAnswersExist;
