import { useEffect, useState } from 'react';
import useQuizScore from 'hooks/useQuizScore';
import useCheckQuizUsernameCookie from 'hooks/useCheckQuizUsernameCookie';
import { Wrapper } from 'components/Quiz/Layout/Scoreboard/Scoreboard.style';
import { getCookie } from 'cookies-next';

const Scoreboard = () => {
  useCheckQuizUsernameCookie();
  const [score, maxScore] = useQuizScore();
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(String(getCookie('quiz-username')));
  }, []);

  return (
    <Wrapper>
      <p>Gratulacje! 🎉</p>
      <p>
        Twój wynik <strong>{username}</strong> to{' '}
        <strong>
          {score} / {maxScore}
        </strong>
      </p>
      {score === maxScore ? <p>Odbierz swoją nagrodę! 🎁</p> : null}
    </Wrapper>
  );
};

export default Scoreboard;
