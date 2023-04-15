import { useRouter } from 'next/router';

const useCookieName = (questionId: string | string[] = '') => {
  const router = useRouter();

  switch (true) {
    case router.asPath.includes('mlodziez'):
      return `quiz-answer-youth-${questionId}`;
    case router.asPath.includes('kobiety'):
      return `quiz-answer-woman-${questionId}`;
    case router.asPath.includes('dzieci'):
      return `quiz-answer-children-${questionId}`;
    case router.asPath.includes('f1'):
      return `quiz-answer-f1-${questionId}`;
    case router.asPath.includes('zuk'):
      return `quiz-answer-zuk-${questionId}`;
    default:
      return '';
  }
};

export default useCookieName;
