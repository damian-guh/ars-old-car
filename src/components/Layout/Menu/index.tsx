import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NAV_ITEMS } from 'utils/constants';
import carAnimation from 'helpers/carAnimation';
import useDesktopMediaQuery from 'hooks/useDesktopMediaQuery';
import useMounted from 'hooks/useMounted';
import {
  StyledNav,
  NavList,
  NavListItem,
  DesktopLink,
  SubNavItemSection,
  TitleForSubtitle,
  MobileSubNavItemSection,
} from 'components/Layout/Menu/Menu.style';

type Props = {
  isOpen: boolean | null;
  logoRef: React.RefObject<HTMLDivElement>;
};

const adjustNavItemName = (name: string) =>
  name.replace(/\s+/g, '-').replace(/^#/, '').replace(/ś/, 's').toLowerCase();

const Menu = ({ ...props }: Props) => {
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const router = useRouter();

  if (isDesktop && isMounted) {
    return (
      <StyledNav {...props}>
        <NavList>
          {NAV_ITEMS.map(({ title, subtitles }) => (
            <NavListItem key={title}>
              <DesktopLink
                role='link'
                tabIndex={0}
                onClick={(event) => {
                  if (!subtitles) {
                    carAnimation(
                      props.logoRef,
                      event,
                      `/${adjustNavItemName(title)}`,
                      router
                    );
                  }
                }}
              >
                {!subtitles ? (
                  title
                ) : (
                  <>
                    <TitleForSubtitle>{title}</TitleForSubtitle>
                    <SubNavItemSection>
                      <div>
                        {subtitles.map((subtitle) => (
                          <span
                            role='link'
                            tabIndex={-1}
                            onClick={(event) =>
                              carAnimation(
                                props.logoRef,
                                event,
                                `/${adjustNavItemName(subtitle)}`,
                                router
                              )
                            }
                          >
                            {subtitle}
                          </span>
                        ))}
                      </div>
                    </SubNavItemSection>
                  </>
                )}
              </DesktopLink>
            </NavListItem>
          ))}
        </NavList>
      </StyledNav>
    );
  }

  return (
    <StyledNav {...props}>
      <NavList>
        {NAV_ITEMS.map(({ title, subtitles }) => (
          <NavListItem key={title}>
            {!subtitles ? (
              <Link href={`/${adjustNavItemName(title)}`}>{title}</Link>
            ) : (
              subtitles.map((subtitle) => (
                <MobileSubNavItemSection>
                  <TitleForSubtitle>{title}</TitleForSubtitle>
                  <Link href={`/${adjustNavItemName(subtitle)}`}>
                    {subtitle}
                  </Link>
                </MobileSubNavItemSection>
              ))
            )}
          </NavListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default Menu;
