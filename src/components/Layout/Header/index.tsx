import { useState } from 'react';
import { Wrapper, Logo } from 'components/Layout/Header/Header.style';
import Menu from 'components/Layout/Menu';
import Burger from 'components/Layout/Menu/Burger';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const isBurger = !isDesktop && isMounted;

  return (
    <Wrapper>
      <Logo>ArsOldCar</Logo>
      <Menu isOpen={isMenuOpen} />
      {isBurger && (
        <Burger
          isOpen={isMenuOpen}
          onClick={() => toggleMenu((prevState) => !prevState)}
        />
      )}
    </Wrapper>
  );
};

export default Header;
