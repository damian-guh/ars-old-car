import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { checkCookies } from 'cookies-next';

const useCheckQuizUsernameCookie = () => {
  const router = useRouter();

  useEffect(() => {
    if (!checkCookies('quiz-username')) {
      router.push('/quiz/');
    }
  }, []);
};

export default useCheckQuizUsernameCookie;
