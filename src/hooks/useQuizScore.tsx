import { useState, useEffect } from 'react';
import { getCookie, setCookies } from 'cookies-next';
import getTomorrowDate from 'helpers/getTomorrowDate';
import CHILDREN_QUESTIONS from 'utils/constants/quizQuestions/childrenQuestions';
import F1_QUESTIONS from 'utils/constants/quizQuestions/f1Questions';
import WOMAN_QUESTIONS from 'utils/constants/quizQuestions/womanQuestions';
import YOUTH_QUESTIONS from 'utils/constants/quizQuestions/youthQuestions';

type Question = {
  content: string;
  answers: string[];
  correctAnswer: string;
};

type Questions = Question[];

const useQuizScore = () => {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const checkAnswerAndSetScore = (questions: Questions) => {
    questions.forEach((question, index) => {
      if (question.correctAnswer === getCookie(`quiz-answer-${index + 1}`)) {
        setScore((prevScore) => prevScore + 1);
      }
    });
  };

  useEffect(() => {
    if (score === 0) {
      switch (getCookie('quiz-category')) {
        case '/quiz/dzieci':
          checkAnswerAndSetScore(CHILDREN_QUESTIONS);
          setMaxScore(CHILDREN_QUESTIONS.length);
          break;
        case '/quiz/kobiety':
          checkAnswerAndSetScore(WOMAN_QUESTIONS);
          setMaxScore(WOMAN_QUESTIONS.length);
          break;
        case '/quiz/fani-f1':
          checkAnswerAndSetScore(F1_QUESTIONS);
          setMaxScore(F1_QUESTIONS.length);
          break;
        case '/quiz/mlodziez':
          checkAnswerAndSetScore(YOUTH_QUESTIONS);
          setMaxScore(YOUTH_QUESTIONS.length);
          break;
        default:
          setScore(0);
      }
    }
  }, []);

  useEffect(() => {
    setCookies('quiz-score', score, {
      secure: true,
      expires: getTomorrowDate(),
    });
  }, [score]);

  return [score, maxScore];
};

export default useQuizScore;
