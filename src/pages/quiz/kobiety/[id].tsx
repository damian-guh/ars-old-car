import React, { MouseEvent } from 'react';
import { NextRouter, useRouter } from 'next/router';
import useQuestionAndAnswers from 'hooks/useQuestionAndAnswers';
import useCheckQuizUsernameCookie from 'hooks/useCheckQuizUsernameCookie';
import useCheckIsAnswerExist from 'hooks/useCheckIsAnswerExist';
import useCheckAllIsAnswersExist from 'hooks/useCheckAllIsAnswersExist';
import Layout from 'components/Quiz/Layout';
import {
  QuizQuestionAndAnswerSection,
  QuizQuestion,
  QuizAnswerButton,
  QuizInfoSpan,
} from 'components/Quiz/Quiz.style';
import WOMAN_QUESTIONS from 'utils/constants/quizQuestions/womanQuestions';
import { setCookies, checkCookies } from 'cookies-next';
import getTomorrowDate from 'helpers/getTomorrowDate';
import isAllAnswersExist from 'helpers/isAllAnswersExist';

type ButtonsProps = { answers: string[] };

const handleAnswer = (
  event: MouseEvent<HTMLButtonElement> & { target: { value?: string } },
  setAnswerExist: React.Dispatch<React.SetStateAction<boolean>>,
  router: NextRouter
) => {
  const { value } = event.target;
  const cookieKey = `quiz-answer-woman-`;
  const cookieAnswer = `${cookieKey}${router.query.id}`;
  setCookies(cookieAnswer, value, {
    secure: true,
    expires: getTomorrowDate(),
  });
  setCookies('quiz-woman', '', { secure: true, expires: getTomorrowDate() });
  setAnswerExist(checkCookies(cookieAnswer));
  if (isAllAnswersExist(WOMAN_QUESTIONS.length, cookieKey))
    router.push('/quiz/koniec');
};

const QuizAnswerButtons = ({ answers }: ButtonsProps) => {
  const router = useRouter();
  const [isAnswerExist, setAnswerExist] = useCheckIsAnswerExist();

  if (isAnswerExist)
    return (
      <QuizInfoSpan>
        Udzielono odpowiedzi na to pytanie, szukaj kolejnych kodów QR
      </QuizInfoSpan>
    );

  return (
    <>
      {answers.map((answer) => (
        <QuizAnswerButton
          type='button'
          value={answer}
          disabled={isAnswerExist}
          key={answer}
          onClick={(event) => handleAnswer(event, setAnswerExist, router)}
        >
          {answer}
        </QuizAnswerButton>
      ))}
    </>
  );
};

const QuestionPage = () => {
  useCheckQuizUsernameCookie();
  useCheckAllIsAnswersExist(WOMAN_QUESTIONS.length);
  const question = useQuestionAndAnswers(WOMAN_QUESTIONS);

  if (!question)
    return (
      <Layout>
        <span>Nie znaleziono takiego pytania</span>
      </Layout>
    );

  return (
    <Layout>
      <QuizQuestionAndAnswerSection>
        <QuizQuestion>{question.content}</QuizQuestion>
        <QuizAnswerButtons answers={question.answers} />
      </QuizQuestionAndAnswerSection>
    </Layout>
  );
};

export default QuestionPage;
