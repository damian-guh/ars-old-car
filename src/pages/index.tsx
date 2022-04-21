import Layout from 'components/Layout';
import { Map } from 'components/Layout/Map';
import Hero from 'components/Hero';
import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
import {
  FLIPPING_CARD_COMPANY_EVENTS,
  FLIPPING_CARD_EXCLUSIVE_CAR_PICS,
} from 'utils/constants/flippingCardsContent';
import FlippingCard from 'components/FlippingCard';
import heroMuseumImage from '../../public/hero1.png';
import heroForest2CVImage from '../../public/2cv-forest.png';
import { FlippingCardsSection } from '../components/FlippingCard/FlippingCard.style';

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
    <FlippingCardsSection>
      <FlippingCard content={FLIPPING_CARD_COMPANY_EVENTS} />{' '}
      <FirefighterTruckAttraction />
      <FlippingCard content={FLIPPING_CARD_EXCLUSIVE_CAR_PICS} />
    </FlippingCardsSection>
    <Map />
  </Layout>
);
export default Home;
