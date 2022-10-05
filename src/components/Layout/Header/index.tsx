import { useContext, useRef } from 'react';
import Link from 'next/link';
import { BurgerContext } from 'components/Layout';
import {
  Wrapper,
  LogoWrapper,
  QuickNewsSection,
} from 'components/Layout/Header/Header.style';
import Logo from 'components/Layout/Logo';
import Menu from 'components/Layout/Menu';
import Burger from 'components/Layout/Menu/Burger';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';

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
      <QuickNewsSection>
        Do 28.10.2022 muzeum czynne dla grup szkolnych i przedszkolnyc
      </QuickNewsSection>
    </Wrapper>
  );
};

export default Header;
