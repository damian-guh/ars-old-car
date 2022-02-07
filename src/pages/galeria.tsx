import type { GetStaticProps } from 'next';
import axios from 'axios';
import { Wrapper } from 'components/Layout/Gallery/Gallery.style';
import adjustImagesObjects from 'helpers/adjustImagesObjects';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Layout from 'components/Layout';

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
  if (error === undefined) {
    const images = adjustImagesObjects(allGalleries);
    return (
      <Layout>
        <Wrapper>
          <ImageGallery
            items={images}
            lazyLoad
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets
          />
        </Wrapper>
      </Layout>
    );
  }
  return <Layout>{error}</Layout>;
};

export default GalleryPage;
