import type { NextPage } from 'next';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import Attractions from 'components/Attractions';

const Home: NextPage = () => (
  <Layout>
    <Hero />
    <Attractions />
  </Layout>
);

export default Home;
