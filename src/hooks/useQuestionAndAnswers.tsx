import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Question = {
  content: string;
  answers: string[];
  correctAnswer: string;
};

type Questions = Question[];

const useQuestionAndAnswers = (questions: Questions) => {
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (!router.query.id) return;
    setQuestion(questions[Number(router.query.id) - 1]);
  }, [router.query.id]);

  return question;
};

export default useQuestionAndAnswers;
