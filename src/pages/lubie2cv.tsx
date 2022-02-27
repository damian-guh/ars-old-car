import { MouseEvent, useEffect, useState } from 'react';
import type { GetStaticProps } from 'next';
import axios from 'axios';
import {
  Wrapper as GalleryWrapper,
  GalleryDesc,
  GalleryDescWrapper,
  ImageWrapper,
  StyledImage,
} from 'components/Layout/Gallery/Gallery.style';
import Layout from 'components/Layout';
import ImageModal from 'components/ImageModal';

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
          allLubie2cvs {
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
const Lubie2cvPage = ({
  allLubie2cvs,
  error,
}: {
  allLubie2cvs: Assets;
  error?: string;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string; id: string }) | null
  >(null);
  const [allImages, setAllImages] = useState(allLubie2cvs);
  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  useEffect(() => {
    setAllImages(allLubie2cvs);
  }, []);

  if (error === undefined) {
    return (
      <Layout>
        <>
          <GalleryDescWrapper>
            <GalleryDesc>
              Fanów 2CV zapraszamy do przesyłania Waszych ciekawych zdjęć w tle
              z samochodem lub gadżetami , w szczególności z pobytu w naszym
              muzeum. Spośród najciekawszych zdjęć wybierzemy zdjęcie miesiąca i
              sezonu. Dla laureatów czekają nagrody w tematyce związanej
              oczywiście z 2CV.
            </GalleryDesc>
          </GalleryDescWrapper>
          <GalleryWrapper>
            {allLubie2cvs.map(({ asset }) =>
              asset.map(({ url, id }) => (
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
          </GalleryWrapper>
        </>
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

export default Lubie2cvPage;
