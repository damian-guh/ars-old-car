import styled from 'styled-components';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';

type Props = {
  isOpen: boolean;
};

export const StyledNav = styled.nav<Props>`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: 0;
  height: calc(100vh - ${HEADER_HEIGHT});
  width: 100vw;
  transition: all 0.3s linear;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100vw')});

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    position: static;
    height: 100%;
    width: inherit;
    transform: translateX(0);
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 25px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const NavListItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
