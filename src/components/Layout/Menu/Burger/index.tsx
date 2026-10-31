import { StyledBurger } from 'components/Layout/Menu/Burger/Burger.style';

type Props = {
  isOpen: boolean | null;
  onClick: () => void;
};

const Burger = ({ isOpen, onClick }: Props) => (
  <StyledBurger $isOpen={isOpen} onClick={onClick}>
    <span />
    <span />
    <span />
  </StyledBurger>
);

export default Burger;
