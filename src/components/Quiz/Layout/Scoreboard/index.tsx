import { useEffect, useState } from 'react';
import useQuizScore from 'hooks/useQuizScore';
import useCheckQuizUsernameCookie from 'hooks/useCheckQuizUsernameCookie';
import { Wrapper } from 'components/Quiz/Layout/Scoreboard/Scoreboard.style';
import { getCookie } from 'cookies-next';

const Scoreboard = () => {
  useCheckQuizUsernameCookie();
  const { childrenQuizScore, f1QuizScore, womanQuizScore, youthQuizScore } =
    useQuizScore();
  const [username, setUsername] = useState('');

  const isAllScoresAreMax = () =>
    childrenQuizScore.score === childrenQuizScore.maxScore &&
    f1QuizScore.score === f1QuizScore.maxScore &&
    womanQuizScore.score === womanQuizScore.maxScore &&
    youthQuizScore.score === youthQuizScore.maxScore;

  useEffect(() => {
    setUsername(String(getCookie('quiz-username')));
  }, []);

  return (
    <Wrapper>
      <p>Gratulacje! 🎉</p>
      <p>
        Twoje wyniki <strong>{username}</strong> to:
      </p>
      <p>
        Dla dzieci{' '}
        <strong>
          {childrenQuizScore.score}/{childrenQuizScore.maxScore}
        </strong>
      </p>
      <p>
        Dla kobiet{' '}
        <strong>
          {womanQuizScore.score}/{womanQuizScore.maxScore}
        </strong>
      </p>
      <p>
        Dla fanów F1{' '}
        <strong>
          {f1QuizScore.score}/{f1QuizScore.maxScore}
        </strong>
      </p>
      <p>
        Dla młodzieży{' '}
        <strong>
          {youthQuizScore.score}/{youthQuizScore.maxScore}
        </strong>
      </p>
      {isAllScoresAreMax() && <p>Odbierz swoją nagrodę! 🎁</p>}
    </Wrapper>
  );
};

export default Scoreboard;
