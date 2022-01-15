import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from 'utils/constants';
import carAnimation from 'helpers/carAnimation';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';
import { StyledNav, NavList, NavListItem } from './Menu.style';

type Props = {
  isOpen: boolean | null;
  logoRef: React.RefObject<HTMLDivElement>;
};

const DesktopLink = styled.span`
  cursor: pointer;
`;

const adjustNavItemNameForUrl = (name: string) =>
  name.replace(/\s+/g, '-').replace(/^#/, '').replace(/ś/, 's').toLowerCase();

const Menu = ({ ...props }: Props) => {
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const router = useRouter();

  return (
    <StyledNav {...props}>
      <NavList>
        {NAV_ITEMS.map((item) => (
          <NavListItem key={item}>
            {isDesktop && isMounted ? (
              <DesktopLink
                role='link'
                tabIndex={0}
                onClick={(event) =>
                  carAnimation(
                    props.logoRef,
                    event,
                    `/${adjustNavItemNameForUrl(item)}`,
                    router
                  )
                }
              >
                {item}
              </DesktopLink>
            ) : (
              <Link href={`/${adjustNavItemNameForUrl(item)}`}>{item}</Link>
            )}
          </NavListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default Menu;
