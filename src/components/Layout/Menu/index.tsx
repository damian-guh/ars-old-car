import React, { useState } from 'react';
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

type Subtitle = {
  title: string;
  subtitles: Subtitle[];
  customUrl: string | null;
};

const adjustNavItemName = (name: string) =>
  name.toLowerCase().replace(/\s+/g, '-').replace(/^#/, '').replace(/ś/, 's');
const Menu = ({ ...props }: Props) => {
  const [isOpenedSubNav, setIsOpenedSubNav] = useState<string | null>(null);
  const isDesktop = useDesktopMediaQuery();
  const { isMounted } = useMounted();
  const router = useRouter();
  let navContent;

  const renderSubtitles = (subtitles: Subtitle[]) =>
    subtitles.map((subtitle) => {
      if (subtitle.customUrl) {
        return (
          <a
            href={subtitle.customUrl}
            target='_blank'
            rel='noreferrer'
            key={subtitle.title}
          >
            {subtitle.title}
          </a>
        );
      }
      if (subtitle.subtitles.length > 0 && isDesktop && isMounted) {
        return (
          <button
            type='button'
            key={subtitle.title}
            onClick={() =>
              isOpenedSubNav === subtitle.title
                ? setIsOpenedSubNav(null)
                : setIsOpenedSubNav(subtitle.title)
            }
          >
            <span>{subtitle.title}</span>
            {isOpenedSubNav === subtitle.title && (
              <SubNavItemSection>
                {renderSubtitles(subtitle.subtitles)}
              </SubNavItemSection>
            )}
          </button>
        );
      }
      if (subtitle.subtitles.length > 0 && !isDesktop && isMounted) {
        return (
          <div key={subtitle.title}>
            <span>{subtitle.title}</span>
            <MobileSubNavItemSection>
              {renderSubtitles(subtitle.subtitles)}
            </MobileSubNavItemSection>
          </div>
        );
      }
      return (
        <div key={subtitle.title}>
          <button
            type='button'
            onClick={(event) => {
              if (isDesktop) {
                carAnimation(
                  props.logoRef,
                  event,
                  `/${adjustNavItemName(subtitle.title)}`,
                  router
                );
              } else {
                router.push(`/${adjustNavItemName(subtitle.title)}`);
              }
            }}
          >
            {subtitle.title}
          </button>
        </div>
      );
    });

  if (isDesktop && isMounted) {
    navContent = (
      <StyledNav {...props}>
        <NavList>
          {NAV_ITEMS.map(({ title, subtitles, customUrl }) => {
            let navListItemContent;

            if (customUrl) {
              navListItemContent = (
                <a href={customUrl} target='_blank' rel='noreferrer'>
                  {title}
                </a>
              );
            } else if (subtitles.length > 0) {
              navListItemContent = (
                <DesktopLink>
                  <TitleForSubtitle>{title}</TitleForSubtitle>
                  <SubNavItemSection>
                    <div>{renderSubtitles(subtitles)}</div>
                  </SubNavItemSection>
                </DesktopLink>
              );
            } else {
              navListItemContent = (
                <span
                  role='link'
                  tabIndex={-1}
                  onClick={(event) =>
                    carAnimation(
                      props.logoRef,
                      event,
                      `/${adjustNavItemName(title)}`,
                      router
                    )
                  }
                >
                  {title}
                </span>
              );
            }

            return <NavListItem key={title}>{navListItemContent}</NavListItem>;
          })}
        </NavList>
      </StyledNav>
    );
  } else {
    navContent = (
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
          {NAV_ITEMS.map(({ title, subtitles, customUrl }) => {
            let navListItemContent;

            if (customUrl) {
              navListItemContent = (
                <a href={customUrl} rel='noreferrer' target='_blank'>
                  {title}
                </a>
              );
            } else if (subtitles.length > 0) {
              navListItemContent = (
                <MobileSubNavItemSection>
                  <TitleForSubtitle>{title}</TitleForSubtitle>
                  {renderSubtitles(subtitles)}
                </MobileSubNavItemSection>
              );
            } else {
              navListItemContent = (
                <Link href={`/${adjustNavItemName(title)}`}>{title}</Link>
              );
            }

            return <NavListItem key={title}>{navListItemContent}</NavListItem>;
          })}
        </NavList>
      </StyledNav>
    );
  }

  return navContent;
};

export default Menu;
