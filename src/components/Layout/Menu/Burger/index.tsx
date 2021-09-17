import { StyledBurger } from 'components/Layout/Menu/Burger/Burger.style';

type Props = {
  isOpen: boolean | null;
  onClick: () => void;
};

const Burger = ({ ...props }: Props) => (
  <StyledBurger {...props}>
    <span />
    <span />
    <span />
  </StyledBurger>
);

export default Burger;
