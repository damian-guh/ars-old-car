import { MouseEvent, useEffect, useState } from 'react';
import type { GetStaticProps } from 'next';
import axios from 'axios';
import {
  Wrapper,
  ImageWrapper,
  ImagesWrapper,
  StyledImage,
  FlippingCardSection,
} from 'components/Layout/Gallery/Gallery.style';
import Layout from 'components/Layout';
import ImageModal from 'components/ImageModal';
import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
import FlippingCard from 'components/FlippingCard';
import { FLIPPING_CARD_SCULPTURE } from 'utils/constants/flippingCardsContent';

type Assets = [
  {
    asset: [
      {
        id: string;
        url: string;
      }
    ];
  }
];

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: { data },
    }: { data: { data: Assets } } = await axios.post(
      'https://graphql.datocms.com/',
      {
        query: `
        {
          allGalleries {
            asset {
              id
              url
            }
          }
        }
    `,
      },
      {
        headers: {
          authorization: `Bearer ${process.env.DATOCMS_API_KEY}`,
        },
      }
    );
    return {
      props: {
        ...data,
      },
      revalidate: 60,
    };
  } catch {
    return {
      props: {
        error: 'Nie udało się pobrać zdjęć',
      },
      revalidate: 60,
    };
  }
};

const GalleryPage = ({
  allGalleries,
  error,
}: {
  allGalleries: Assets;
  error?: string;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string; id: string }) | null
  >(null);
  const [allImages, setAllImages] = useState(allGalleries);
  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  useEffect(() => {
    setAllImages(allGalleries);
  }, []);

  if (error === undefined) {
    return (
      <Layout>
        <Wrapper>
          <ImagesWrapper>
            {allGalleries.map(({ asset }) =>
              asset.map(({ id, url }) => (
                <ImageWrapper key={id}>
                  <StyledImage
                    layout='fill'
                    src={url}
                    quality={95}
                    alt='Gallery image'
                    objectFit='cover'
                    id={id}
                    onClick={(event) => handleModal(event)}
                  />
                </ImageWrapper>
              ))
            )}
          </ImagesWrapper>
          <FlippingCardSection>
            <FirefighterTruckAttraction />
            <FlippingCard content={FLIPPING_CARD_SCULPTURE} />
          </FlippingCardSection>
        </Wrapper>
        <ImageModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          clickedImage={clickedImage}
          allImages={allImages}
        />
      </Layout>
    );
  }
  return <Layout>{error}</Layout>;
};

export default GalleryPage;
