import Layout from 'components/Layout';
import { Map } from 'components/Layout/Map';
import Hero from 'components/Hero';
import heroMuseumImage from '../../public/hero1.png';
import heroForest2CVImage from '../../public/2cv-forest.png';

const heroMuseumTitle = 'Witaj w Naszym Muzeum';
const heroMuseumDesc =
  'To nieoczywiste, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów';
const heroForestDesc =
  'Wystawa 2CV WORLD poświęcona jednemu z najbardziej charakterystycznych klasyków w dziejach motoryzacji zwanym "Brzydkim Kaczątkiem", "Kaczką" czy też "Parasolem na czterech kołach". Z tej okazji można zobaczyć największą kolekcję gadżetów związanych z tym samochodem, w tym zaskakującą kolekcję "kaczek".';

const Home = () => (
  <Layout>
    <Hero
      image={heroMuseumImage}
      title={heroMuseumTitle}
      desc={heroMuseumDesc}
    />
    <Hero image={heroForest2CVImage} desc={heroForestDesc} />
    <Map />
  </Layout>
);
export default Home;
