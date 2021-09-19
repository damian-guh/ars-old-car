import React, { useContext } from 'react';
import Link from 'next/link';
import { BurgerContext } from 'components/Layout';
import { Wrapper, Logo } from 'components/Layout/Header/Header.style';
import Menu from 'components/Layout/Menu';
import Burger from 'components/Layout/Menu/Burger';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useContext(BurgerContext);
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const isBurger = !isDesktop && isMounted;

  return (
    <Wrapper>
      <Link href='/'>
        <Logo>ArsOldCar</Logo>
      </Link>
      <Menu isOpen={isMenuOpen} />
      {isBurger && (
        <Burger
          isOpen={isMenuOpen}
          onClick={() => toggleMenu && toggleMenu((prevState) => !prevState)}
        />
      )}
    </Wrapper>
  );
};

export default Header;
