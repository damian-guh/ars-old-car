import React from 'react';
import Theme from 'components/Theme';
import {
  QuizWrapper,
  QuizContentWrapper,
  QuizHeader,
} from 'components/Quiz/Quiz.style';
import Logo from 'components/Layout/Logo';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <Theme>
    <QuizWrapper>
      <QuizHeader>
        <Logo />
      </QuizHeader>
      <QuizContentWrapper>{children}</QuizContentWrapper>
    </QuizWrapper>
  </Theme>
);

export default Layout;
