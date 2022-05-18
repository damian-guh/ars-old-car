import type { NextPage } from 'next';
import useIsInMuseumRange from 'hooks/useIsInMuseumRange';
import Layout from 'components/Quiz/Layout';
import {
  QuizLocationError,
  StyledLocationIcon,
  QuizLocationErrorText,
} from 'components/Quiz/Quiz.style';
import StartSection from 'components/Quiz/Layout/StartSection';

type ErrorProps = {
  errorText: string;
};

const QuizPageLocationError = ({ errorText }: ErrorProps) => (
  <Layout>
    <QuizLocationError>
      <StyledLocationIcon />
      <QuizLocationErrorText>{errorText}</QuizLocationErrorText>
    </QuizLocationError>
  </Layout>
);

const QuizF1Page: NextPage = () => {
  const isInRange = useIsInMuseumRange();
  if (isInRange === null)
    return (
      <QuizPageLocationError errorText='Włącz lokalizacje w ustawieniach i zezwól na jej udostępnienie' />
    );
  if (!isInRange)
    return (
      <QuizPageLocationError errorText='Prawdopodobnie nie jesteś w pobliżu muzeum, spróbuj ponownie włączyć lokalizacje' />
    );
  return (
    <Layout>
      <StartSection color='orange' />
    </Layout>
  );
};

export default QuizF1Page;
