import { useState, useEffect, useCallback, ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import {
  CarouselContainer,
  CarouselButtonLeft,
  CarouselButtonRight,
  StyledButton,
} from 'components/Carousel/Carousel.style';

type Child = {
  id: number;
  content: ReactNode;
};

type Props = {
  children: Child[];
};

const Carousel = ({ children }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((api: EmblaCarouselType) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
    setPrevBtnDisabled(!api.canScrollPrev());
    setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <CarouselContainer className='embla'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {children.map((child, index) => (
            <div
              className={`embla__slide ${
                index === selectedIndex ? 'embla__slide--active' : ''
              }`}
              key={child.id}
            >
              {child.content}
            </div>
          ))}
        </div>
      </div>
      <div className='embla__buttons'>
        <StyledButton
          type='button'
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          <CarouselButtonLeft />
        </StyledButton>
        <StyledButton
          type='button'
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          <CarouselButtonRight />
        </StyledButton>
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
