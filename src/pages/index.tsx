import type { GetStaticProps } from 'next';
import styled from 'styled-components';
import axios from 'axios';
import Layout from 'components/Layout';
import { Map } from 'components/Layout/Map';
import Hero from 'components/Hero';
import Attractions from 'components/Attractions';

type AllQuicknews = [{ description: string; id: string }];
type AllQuicknewsRes = { data: { data: AllQuicknews } };
type AllMainnews = [
  {
    description: {
      value: {
        document: {
          type: string;
          children: [
            {
              type: string;
              children: [{ type: string; marks: string[]; value: string }];
            }
          ];
        };
        schema: string;
      };
    };
    title: string;
  }
];
type AllMainnewsRes = { data: { data: AllMainnews } };

export const getStaticProps: GetStaticProps = async () => {
  try {
    const {
      data: { data },
    }: AllQuicknewsRes & AllMainnewsRes = await axios.post(
      'https://graphql.datocms.com/',
      {
        query: `
        {
          allQuicknews {
            description
            id
          }
          allMainnews {
            title
            description {
              value
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
        error: 'Nie udało się pobrać wiadomości',
      },
      revalidate: 60,
    };
  }
};

const QuicknewsWrapper = styled.section`
  text-align: center;
  padding: 5px;

  p {
    margin: 3px;
  }
`;

const MainnewsWrapper = styled.section`
  padding: 5px;
  text-align: justify;
  margin: 20px;
`;

const Quicknews = ({ allQuickNews }: { allQuickNews: AllQuicknews }) => (
  <QuicknewsWrapper>
    {allQuickNews.map(({ description, id }) => {
      const endOfLineIndexes = [
        ...description.matchAll(new RegExp('\\n', 'gi')),
      ].map((a) => a.index);
      endOfLineIndexes.push(description.length);
      return (
        <div key={`${description}${id}`}>
          {endOfLineIndexes.map((endOfLineIndex, index) => (
            <p key={`${description}${endOfLineIndex}${id}`}>
              {description.slice(
                index === 0 ? 0 : endOfLineIndexes[index - 1],
                endOfLineIndex
              )}
            </p>
          ))}
        </div>
      );
    })}
  </QuicknewsWrapper>
);

const Mainnews = ({ allMainnews }: { allMainnews: AllMainnews }) => (
  <MainnewsWrapper>
    {allMainnews.map(({ title, description }) => (
      <div>
        <strong>{title}</strong>
        {description.value.document.children.map(({ children }) => (
          <>
            {children.map(({ value }) => (
              <p>{value}</p>
            ))}
          </>
        ))}
      </div>
    ))}
  </MainnewsWrapper>
);

const Home = ({
  allQuicknews,
  allMainnews,
}: {
  allQuicknews: AllQuicknews;
  allMainnews: AllMainnews;
}) => (
  <Layout>
    <Hero>
      <Quicknews allQuickNews={allQuicknews} />
    </Hero>
    <Attractions />
    <Mainnews allMainnews={allMainnews} />
    <Map />
  </Layout>
);

export default Home;
