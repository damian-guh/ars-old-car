import { useEffect } from 'react';
import { useRouter } from 'next/router';
import isAllAnswersExist from 'helpers/isAllAnswersExist';
import useCookieName from 'hooks/useCookieName';

const useCheckAllIsAnswersExist = (questionAmount: number) => {
  const router = useRouter();
  const cookieName = useCookieName();

  useEffect(() => {
    if (isAllAnswersExist(questionAmount, cookieName)) {
      router.push('/quiz/koniec');
    }
  }, []);
};

export default useCheckAllIsAnswersExist;
