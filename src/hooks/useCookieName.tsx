import { useRouter } from 'next/router';

const useCookieName = (questionId: string | string[] = '') => {
  const router = useRouter();

  if (router.asPath.includes('mlodziez'))
    return `quiz-answer-youth-${questionId}`;
  if (router.asPath.includes('kobiety'))
    return `quiz-answer-woman-${questionId}`;
  if (router.asPath.includes('dzieci'))
    return `quiz-answer-children-${questionId}`;
  if (router.asPath.includes('f1')) return `quiz-answer-f1-${questionId}`;
  return '';
};

export default useCookieName;
