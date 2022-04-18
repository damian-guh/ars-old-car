import type { NextPage } from 'next';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from 'components/Quiz/Layout';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  padding: 10px;

  div {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    margin: 20px 0;
    text-align: left;
  }
`;

const QuizPage: NextPage = () => (
  <Layout>
    <Wrapper>
      <div>
        <p>Zasady</p>
        <p>1. Wybierz kategorię poniżej, wpisz swoje imię</p>
        <p>2. Szukaj kodów z kolorem kategorii, którą wybrałeś</p>
        <p>3. Udziel odpowiedzi i szukaj kolejnego kodu</p>
        <p>
          4. Po udzieleniu wszystkich odpowiedzi zostaniesz przekierowany do
          tabeli
        </p>
        <p>5. Wróć z powrotem tutaj i wybierz kolejną kategorie</p>
      </div>
      <Link href='/quiz/dzieci'>
        <a>Dla dzieci</a>
      </Link>
      <Link href='/quiz/kobiety'>
        <a>Dla kobiet</a>
      </Link>
      <Link href='/quiz/mlodziez'>
        <a>Dla młodzieży</a>
      </Link>
      <Link href='/quiz/fani-f1'>
        <a>Dla fanów F1</a>
      </Link>
    </Wrapper>
  </Layout>
);

export default QuizPage;
