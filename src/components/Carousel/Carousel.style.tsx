import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';
import { FaRegArrowAltCircleLeft } from '@react-icons/all-files/fa/FaRegArrowAltCircleLeft';

export const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: rgba(23, 23, 22, 0.95);
  text-align: center;
  padding: 30px 0;

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
  padding: 15px;

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const CarouselButtonLeft = styled(FaRegArrowAltCircleLeft)`
  color: ${({ theme }) => theme.colors.white};
`;

export const CarouselButtonRight = styled(FaRegArrowAltCircleRight)`
  color: ${({ theme }) => theme.colors.white};
`;
