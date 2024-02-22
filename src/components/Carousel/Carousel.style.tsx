import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';
import { FaRegArrowAltCircleLeft } from '@react-icons/all-files/fa/FaRegArrowAltCircleLeft';

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: rgb(23, 23, 22);
  text-align: center;

  .embla {
    position: relative;
  }

  .embla__viewport {
    cursor: grab;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    position: relative;
    flex: 0 0 auto;
    width: 100%;
  }

  .embla__buttons {
    display: flex;
    justify-content: space-between;
    pointer-events: none;
  }

  button {
    pointer-events: all;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const CarouselButtonLeft = styled(FaRegArrowAltCircleLeft)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CarouselButtonRight = styled(FaRegArrowAltCircleRight)`
  color: ${({ theme }) => theme.colors.white};
`;
