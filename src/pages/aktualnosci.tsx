import type { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import axios from 'axios';
import Layout from 'components/Layout';
import { Wrapper, Article, ArticleTitle } from 'components/Article';

type Props = {
  allArticles?: [
    {
      id: string;
      title: string;
      _status: string;
      _firstPublishedAt: string;
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
        error: 'Nie udało się pobrać artykułów',
      },
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
            allArticles.map((article) => (
              <Article key={article.id}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <div>
                  {article.content.value.document.children.map(({ children }) =>
                    children.map(({ value, type, url }) => {
                      if (type === 'link') {
                        return (
                          <a key={article.id} href={url}>
                            {url}
                          </a>
                        );
                      }
                      return <div key={article.id}>{value}</div>;
                    })
                  )}
                </div>
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
