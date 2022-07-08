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
import { HeroActionButton } from 'components/Hero/Hero.style';

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
          {NAV_ITEMS.map(({ title, subtitles, customUrl }) => (
            <NavListItem key={title}>
              {customUrl ? (
                <a href={customUrl} target='_blank' rel='noreferrer'>
                  {title}
                </a>
              ) : (
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
                              key={subtitle}
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
              )}
            </NavListItem>
          ))}
        </NavList>
      </StyledNav>
    );
  }

  return (
    <StyledNav {...props}>
      <NavList>
        <HeroActionButton
          href='https://www.google.com/maps/place/Ars+Old+Car/@50.7478915,20.4697656,15z/data=!4m5!3m4!1s0x0:0x16c188f0f4675b70!8m2!3d50.7478915!4d20.4697656'
          target='_blank'
        >
          Nawiguj
        </HeroActionButton>
        <HeroActionButton href='tel:515 355 533'>Zadzwoń</HeroActionButton>
        <HeroActionButton href='/rezerwacje'>Kup bilet</HeroActionButton>
        {NAV_ITEMS.map(({ title, subtitles, customUrl }) => (
          <NavListItem key={title}>
            {customUrl ? (
              <a href={customUrl} rel='noreferrer' target='_blank'>
                {title}
              </a>
            ) : (
              <>
                {!subtitles ? (
                  <Link href={`/${adjustNavItemName(title)}`}>{title}</Link>
                ) : (
                  <MobileSubNavItemSection>
                    <TitleForSubtitle>{title}</TitleForSubtitle>
                    {subtitles.map((subtitle) => (
                      <Link
                        key={subtitle}
                        href={`/${adjustNavItemName(subtitle)}`}
                      >
                        {subtitle}
                      </Link>
                    ))}
                  </MobileSubNavItemSection>
                )}
              </>
            )}
          </NavListItem>
        ))}
      </NavList>
    </StyledNav>
  );
};

export default Menu;
