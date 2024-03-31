import { useState } from 'react';
import Image, { ImageProps } from 'next/legacy/image';
import {
  FlippingCardBack,
  FlippingCardFront,
  FlippingCardWrapper,
} from 'components/FlippingCard/FlippingCard.style';

const FlippingCard = ({
  content: { image, title, urlTitle, text },
}: {
  content: {
    image?: ImageProps;
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
      isHasImage={!!image}
    >
      <FlippingCardFront isHasImage={!!image}>
        {isFrontSide && image ? (
          <Image {...image} alt={`${title}-image`} placeholder='blur' />
        ) : null}
        <h3>{title}</h3>
      </FlippingCardFront>
      <FlippingCardBack isHasImage={!!image}>
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
