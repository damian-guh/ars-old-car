import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

type Props = {
  isOpen: boolean | null;
  important?: boolean;
};

export const StyledNav = styled.nav<Props>`
  position: fixed;
  top: ${HEADER_HEIGHT};
  left: 0;
  height: calc(100% - ${HEADER_HEIGHT});
  width: 100vw;
  transition: all 0.3s linear;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});
  background-color: ${({ theme }) => theme.colors.headerGray};
  overflow-y: auto;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    position: static;
    height: 100%;
    width: inherit;
    min-height: inherit;
    overflow-y: inherit;
    transform: translateX(0);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: center;
  gap: 10px;

  :first-child {
    margin-top: 30px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    flex-direction: row;
    justify-content: center;
    height: 100%;
    padding: 0;

    :first-child {
      margin-top: 0;
    }
  }
`;

export const NavListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 10px;
  margin: 0 0 20px 0;
  text-align: center;

  a {
    border-bottom: 1px solid white;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    margin: 0;

    a {
      border: none;
    }
  }
`;

export const TitleForSubtitle = styled.span`
  margin: 10px;
  font-weight: bold;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    font-weight: normal;
    margin: 0;
  }
`;

export const SubNavItemSection = styled.div`
  position: relative;
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.initial};

  div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background-color: ${({ theme }) => theme.colors.headerGray};
  }

  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};

    :hover {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const MobileSubNavItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  a {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

export const DesktopLink = styled.span<Omit<Props, 'isOpen'>>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition-duration: 0.2s;
  color: ${({ theme, important }) =>
    important ? theme.colors.red : theme.colors.white};

  :hover {
    color: ${({ theme }) => theme.colors.red};
  }

  :hover ${SubNavItemSection} {
    display: flex;
    color: ${({ theme }) => theme.colors.white};
  }
`;
