import { useEffect, useState } from 'react';
import useQuizScore from 'hooks/useQuizScore';
import useCheckQuizUsernameCookie from 'hooks/useCheckQuizUsernameCookie';
import { Wrapper } from 'components/Quiz/Layout/Scoreboard/Scoreboard.style';
import { getCookie, checkCookies } from 'cookies-next';

const Scoreboard = () => {
  useCheckQuizUsernameCookie();
  const {
    childrenQuizScore,
    f1QuizScore,
    womanQuizScore,
    youthQuizScore,
    zukQuizScore,
  } = useQuizScore();
  const [username, setUsername] = useState('');

  const isAllScoresAreMax = () =>
    childrenQuizScore.score === childrenQuizScore.maxScore &&
    f1QuizScore.score === f1QuizScore.maxScore &&
    womanQuizScore.score === womanQuizScore.maxScore &&
    youthQuizScore.score === youthQuizScore.maxScore;
  const isZukScoreIsWin = zukQuizScore.score > 25;

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
          {checkCookies('quiz-children')
            ? `${childrenQuizScore.score}/${childrenQuizScore.maxScore}`
            : 'Nie rozpoczęto'}
        </strong>
      </p>
      <p>
        Dla kobiet{' '}
        <strong>
          {checkCookies('quiz-woman')
            ? `${womanQuizScore.score}/${womanQuizScore.maxScore}`
            : 'Nie rozpoczęto'}
        </strong>
      </p>
      <p>
        Dla fanów F1{' '}
        <strong>
          {checkCookies('quiz-f1')
            ? `${f1QuizScore.score}/${f1QuizScore.maxScore}`
            : 'Nie rozpoczęto'}
        </strong>
      </p>
      <p>
        Dla młodzieży{' '}
        <strong>
          {checkCookies('quiz-youth')
            ? `${youthQuizScore.score}/${youthQuizScore.maxScore}`
            : 'Nie rozpoczęto'}
        </strong>
      </p>
      {(!checkCookies('quiz-children') ||
        !checkCookies('quiz-woman') ||
        !checkCookies('quiz-f1') ||
        !checkCookies('quiz-youth')) &&
        !checkCookies('quiz-zuk') &&
        'Nie ukończono wszystkich kategorii, wróć do strony startowej i wybierz kolejną kategorię'}
      <p>
        Żuk Quiz{' '}
        <strong>
          {checkCookies('quiz-zuk')
            ? `${zukQuizScore.score}/${zukQuizScore.maxScore}`
            : 'Nie rozpoczęto'}
        </strong>
      </p>

      {isAllScoresAreMax() || isZukScoreIsWin ? (
        <p>Odbierz swoją nagrodę! 🎁</p>
      ) : null}
    </Wrapper>
  );
};

export default Scoreboard;
