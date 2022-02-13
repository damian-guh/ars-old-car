import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

type Props = {
  isOpen: boolean | null;
};

export const StyledNav = styled.nav<Props>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  min-height: ${({ isOpen }) => (isOpen ? '100vh' : 'inherit')};
  width: 100vw;
  transition: all 0.3s linear;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});
  background-color: ${({ theme }) => theme.colors.headerGray};

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    position: static;
    height: 100%;
    width: inherit;
    min-height: inherit;
    transform: translateX(0);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 30px;

  :first-child {
    margin-top: 30px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    justify-content: center;

    :first-child {
      margin-top: 0;
    }
  }
`;

export const NavListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
