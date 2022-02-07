import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import axios from 'axios';
import Layout from 'components/Layout';
import {
  Wrapper,
  Article,
  ArticleTitle,
  ImagesWrapper,
  ImageWrapper,
} from 'components/Article';

type Props = {
  allArticles?: [
    {
      id: string;
      title: string;
      _status: string;
      _firstPublishedAt: string;
      images: [
        {
          url: string;
        }
      ];
      content: {
        value: {
          document: {
            children: [
              {
                children: [
                  {
                    value: string;
                    type: string;
                    url: string;
                  }
                ];
                type: string;
              }
            ];
            type: string;
          };
          schema: string;
        };
      };
    }
  ];
  error?: string;
};

type AllArticles = {
  data: {
    data: Pick<Props, 'allArticles'>;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: { data },
    }: AllArticles = await axios.post(
      'https://graphql.datocms.com/',
      {
        query: `
        {
          allArticles {
            id
            title
            content {
              value
            }
            _status
            _firstPublishedAt
            images {
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
        error: 'Nie udało się pobrać artykułów',
      },
      revalidate: 60,
    };
  }
};

const NewsPage: NextPage = ({
  allArticles,
  error,
}: InferGetStaticPropsType<typeof getStaticProps> & Props) => {
  if (error === undefined) {
    return (
      <Layout>
        <Wrapper>
          {allArticles &&
            allArticles.map(({ id, title, content, images }) => (
              <Article key={id}>
                <ArticleTitle>{title}</ArticleTitle>
                <div>
                  {content.value.document.children.map(({ children }) =>
                    children.map(({ value, type, url }) => {
                      if (type === 'link') {
                        return (
                          <a key={id} href={url}>
                            {url}
                          </a>
                        );
                      }
                      return <div key={id}>{value}</div>;
                    })
                  )}
                </div>
                <ImagesWrapper>
                  {images.map(({ url }) => (
                    <ImageWrapper key={url}>
                      <Image
                        src={url}
                        layout='fill'
                        quality={95}
                        objectFit='cover'
                        objectPosition='center'
                      />
                    </ImageWrapper>
                  ))}
                </ImagesWrapper>
              </Article>
            ))}
        </Wrapper>
      </Layout>
    );
  }
  return <Layout>{error}</Layout>;
};

NewsPage.defaultProps = {
  allArticles: [],
  error: undefined,
};

export default NewsPage;
