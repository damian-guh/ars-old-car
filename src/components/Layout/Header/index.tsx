import { useContext, useRef } from 'react';
import Link from 'next/link';
import { BurgerContext } from 'components/Layout';
import {
  Wrapper,
  LogoWrapper,
  CountdownSpan,
} from 'components/Layout/Header/Header.style';
import Logo from 'components/Layout/Logo';
import Menu from 'components/Layout/Menu';
import Burger from 'components/Layout/Menu/Burger';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import dayjs from 'dayjs';

const CountdownRenderer = ({
  days,
  hours,
  minutes,
  seconds,
}: CountdownRenderProps) => {
  const addZeroWhenLower = (value: number) =>
    value < 10 ? `0${value}` : value;

  return (
    <CountdownSpan>
      Do otwarcia muzeum 22 kwietnia zostało: {addZeroWhenLower(days)}:
      {addZeroWhenLower(hours)}:{addZeroWhenLower(minutes)}:
      {addZeroWhenLower(seconds)}
    </CountdownSpan>
  );
};

const Header = () => {
  const [isMenuOpen, toggleMenu] = useContext(BurgerContext);
  const logoRef = useRef<HTMLDivElement>(null);
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const isBurger = !isDesktop && isMounted;

  return (
    <Wrapper>
      <Link href='/'>
        <LogoWrapper ref={logoRef}>
          <Logo />
        </LogoWrapper>
      </Link>
      <Menu isOpen={isMenuOpen} logoRef={logoRef} />
      {isBurger && (
        <Burger
          isOpen={isMenuOpen}
          onClick={() => toggleMenu && toggleMenu((prevState) => !prevState)}
        />
      )}
      <Countdown
        date={dayjs('2022-04-22').toISOString()}
        renderer={CountdownRenderer}
      />
    </Wrapper>
  );
};

export default Header;
