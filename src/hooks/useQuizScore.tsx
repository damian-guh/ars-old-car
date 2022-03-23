import { useEffect, useReducer } from 'react';
import { getCookie, setCookies, getCookies } from 'cookies-next';
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

const initialScore = {
  childrenQuizScore: {
    score: 0,
    maxScore: CHILDREN_QUESTIONS.length,
  },
  f1QuizScore: {
    score: 0,
    maxScore: F1_QUESTIONS.length,
  },
  womanQuizScore: {
    score: 0,
    maxScore: WOMAN_QUESTIONS.length,
  },
  youthQuizScore: {
    score: 0,
    maxScore: YOUTH_QUESTIONS.length,
  },
};

const scoreReducer = (
  state: typeof initialScore,
  { type }: { type: string }
) => {
  switch (type) {
    case 'increment-children-score':
      return {
        ...state,
        childrenQuizScore: {
          score: state.childrenQuizScore.score + 1,
          maxScore: state.childrenQuizScore.maxScore,
        },
      };
    case 'increment-f1-score':
      return {
        ...state,
        f1QuizScore: {
          score: state.f1QuizScore.score + 1,
          maxScore: state.f1QuizScore.maxScore,
        },
      };
    case 'increment-woman-score':
      return {
        ...state,
        womanQuizScore: {
          score: state.womanQuizScore.score + 1,
          maxScore: state.womanQuizScore.maxScore,
        },
      };
    case 'increment-youth-score':
      return {
        ...state,
        youthQuizScore: {
          score: state.youthQuizScore.score + 1,
          maxScore: state.youthQuizScore.maxScore,
        },
      };
    default:
      return state;
  }
};

const useQuizScore = () => {
  const [score, scoreDispatch] = useReducer(scoreReducer, initialScore);

  const checkAnswerAndSetScore = (questions: Questions, category: string) => {
    questions.forEach((question, index) => {
      if (
        question.correctAnswer ===
        getCookie(`quiz-answer-${category}-${index + 1}`)
      ) {
        scoreDispatch({ type: `increment-${category}-score` });
      }
    });
  };

  useEffect(() => {
    if ('quiz-children' in getCookies()) {
      checkAnswerAndSetScore(CHILDREN_QUESTIONS, 'children');
    }
    if ('quiz-woman' in getCookies()) {
      checkAnswerAndSetScore(WOMAN_QUESTIONS, 'woman');
    }
    if ('quiz-youth' in getCookies()) {
      checkAnswerAndSetScore(YOUTH_QUESTIONS, 'youth');
    }
    if ('quiz-f1' in getCookies()) {
      checkAnswerAndSetScore(F1_QUESTIONS, 'f1');
    }
  }, []);

  useEffect(() => {
    setCookies('quiz-score', score, {
      secure: true,
      expires: getTomorrowDate(),
    });
  }, [score]);

  return score;
};

export default useQuizScore;
