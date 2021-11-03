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
`;

const QuizPage: NextPage = () => (
  <Layout>
    <Wrapper>
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
