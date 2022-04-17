import StaticImageData from 'next';
import { useState } from 'react';
import Image from 'next/image';
import {
  FlippingCardBack,
  FlippingCardFront,
  FlippingCardWrapper,
} from 'components/FlippingCard/FlippingCard.style';

const FlippingCard = ({
  content: { image, title, urlTitle, text },
}: {
  content: {
    image: StaticImageData;
    title: string;
    text: string[];
    urlTitle?: string;
  };
}) => {
  const [isFrontSide, setCardSide] = useState(true);
  return (
    <FlippingCardWrapper
      onClick={() => setCardSide((prevState) => !prevState)}
      isFrontSide={isFrontSide}
    >
      <FlippingCardFront>
        <Image src={image} alt={`${title}-image`} placeholder='blur' />
        <h3>{title}</h3>
      </FlippingCardFront>
      <FlippingCardBack>
        {text.map((paragraph) => {
          if (paragraph.includes('http'))
            return (
              <a
                href={paragraph}
                target='_blank'
                rel='noreferrer'
                key={paragraph}
              >
                {urlTitle}
              </a>
            );
          return <p key={paragraph}>{paragraph}</p>;
        })}
      </FlippingCardBack>
    </FlippingCardWrapper>
  );
};

export default FlippingCard;
