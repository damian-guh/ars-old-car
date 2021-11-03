import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkCookies } from 'cookies-next';

const useCheckIsAnswerExist: () => [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] = () => {
  const [isAnswerExist, setAnswerExist] = useState(false);
  const router = useRouter();
  const isCookieExist = checkCookies(`quiz-answer-${router.query.id}`);

  useEffect(() => {
    setAnswerExist(isCookieExist);
  }, [isCookieExist, router.query.id]);

  return [isAnswerExist, setAnswerExist];
};

export default useCheckIsAnswerExist;
