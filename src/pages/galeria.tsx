import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Layout from 'components/Layout';

const Wrapper = styled.div`
  width: 100vw;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .image-gallery-image {
    height: 400px !important;
    padding: 10px;

    @media (orientation: landscape) {
      height: 200px !important;
    }

    @media (min-width: 1024px) {
      height: 500px !important;
    }
  }

  .image-gallery-icon:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  .image-gallery-bullet:hover {
    background-color: ${({ theme }) => theme.colors.red} !important;
    border-color: ${({ theme }) => theme.colors.red} !important;
  }
`;

type Props = {
  allGalleries?: [
    {
      asset: [
        {
          id: string;
          url: string;
        }
      ];
    }
  ];
  error?: string;
};

type AllGalleries = Pick<Props, 'allGalleries'>;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: { data },
    }: { data: { data: AllGalleries } } = await axios.post(
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
    };
  } catch {
    return {
      props: {
        error: 'Nie udało się pobrać zdjęć',
      },
    };
  }
};

const adjustImagesObjects = ({ allGalleries }: AllGalleries) => {
  const images: any[] = [];
  if (allGalleries) {
    allGalleries.forEach(({ asset }) => {
      asset.forEach(({ url }) => {
        images.push({ original: url });
      });
    });
  }
  return images;
};

const GalleryPage: NextPage = ({
  allGalleries,
  error,
}: InferGetStaticPropsType<typeof getStaticProps> & Props) => {
  if (error === undefined) {
    const images = adjustImagesObjects({ allGalleries });
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

GalleryPage.defaultProps = {
  allGalleries: [],
  error: undefined,
};

export default GalleryPage;
