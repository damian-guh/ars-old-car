import styled from 'styled-components';

export const BURGER_DIMENSIONS = '30px';

type Props = {
  isOpen: boolean;
};

export const StyledBurger = styled.button<Props>`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  grid-row: 1/2;
  justify-content: space-around;
  width: ${BURGER_DIMENSIONS};
  height: ${BURGER_DIMENSIONS};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) =>
        isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
