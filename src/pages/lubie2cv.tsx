import type { GetStaticProps } from 'next';
import axios from 'axios';
import {
  Wrapper as GalleryWrapper,
  GalleryDesc,
  GalleryDescWrapper,
} from 'components/Layout/Gallery/Gallery.style';
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
  if (error === undefined) {
    const images = adjustImagesObjects(allLubie2cvs);
    return (
      <Layout>
        <GalleryDescWrapper>
          <GalleryDesc>
            Fanów 2CV zapraszamy do przesyłania Waszych ciekawych zdjęć w tle z
            samochodem lub gadżetami , w szczególności z pobytu w naszym muzeum.
            Spośród najciekawszych zdjęć wybierzemy zdjęcie miesiąca i sezonu.
            Dla laureatów czekają nagrody w tematyce związanej oczywiście z 2CV.
          </GalleryDesc>
        </GalleryDescWrapper>
        <GalleryWrapper>
          <ImageGallery
            items={images}
            lazyLoad
            showPlayButton={false}
            showFullscreenButton={false}
            showBullets
          />
        </GalleryWrapper>
      </Layout>
    );
  }
  return <Layout>{error}</Layout>;
};

export default Lubie2cvPage;
