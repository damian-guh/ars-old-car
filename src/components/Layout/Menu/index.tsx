import Link from 'next/link';
import { NAV_ITEMS } from 'utils/constants';
import { StyledNav, NavList, NavListItem } from './Menu.style';

type Props = {
  isOpen: boolean;
};

const adjustNavItemNameForUrl = (name: string) =>
  name.replace(/\s+/g, '-').replace(/^#/, '').toLowerCase();

const Menu = ({ ...props }: Props) => (
  <StyledNav {...props}>
    <NavList>
      {NAV_ITEMS.map((item) => (
        <NavListItem key={item}>
          <Link href={`/${adjustNavItemNameForUrl(item)}`}>{item}</Link>
        </NavListItem>
      ))}
    </NavList>
  </StyledNav>
);

export default Menu;
