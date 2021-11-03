import { useEffect } from 'react';
import { useRouter } from 'next/router';
import isAllAnswersExist from 'helpers/isAllAnswersExist';

const useCheckAllIsAnswersExist = (questionAmount: number) => {
  const router = useRouter();

  useEffect(() => {
    if (isAllAnswersExist(questionAmount)) {
      router.push('/quiz/koniec');
    }
  }, []);
};

export default useCheckAllIsAnswersExist;
