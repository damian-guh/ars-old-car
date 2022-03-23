import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkCookies } from 'cookies-next';
import useCookieName from 'hooks/useCookieName';

const useCheckIsAnswerExist: () => [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] = () => {
  const [isAnswerExist, setAnswerExist] = useState(false);
  const router = useRouter();
  const cookieName = useCookieName(router.query.id);

  useEffect(() => {
    const isCookieExist = checkCookies(cookieName);
    setAnswerExist(isCookieExist);
  }, [router.query.id]);

  return [isAnswerExist, setAnswerExist];
};

export default useCheckIsAnswerExist;
