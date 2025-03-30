import Layout from 'components/Layout';
import { Map } from 'components/Layout/Map';
import dynamic from 'next/dynamic';
import Partners from 'components/Partners';
import hero1Image from '../../public/hero1.jpg';
import hero2Image from '../../public/hero2.jpg';
import hero3Image from '../../public/hero3.jpg';
import hero4Image from '../../public/hero4.jpg';
import hero5Image from '../../public/hero5.jpg';
import hero6Image from '../../public/hero6.jpg';

const heroMuseumTitle = 'ARS OLD CAR - motoryzacja na wesoło';
const heroMuseumDesc =
  'Duża dawka humoru i uśmiechu, a wszystko to przez kultowy samochód Citroen 2CV znany z filmu „Żandarm z Saint Tropez”. Tylko 7 min. Od Chęcin !';
const images = [
  hero6Image,
  hero5Image,
  hero4Image,
  hero3Image,
  hero2Image,
  hero1Image,
];

const Hero = dynamic(() => import('components/Hero'));

const Home = () => (
  <Layout>
    <Hero images={images} title={heroMuseumTitle} desc={heroMuseumDesc} />
    <Partners />
    <Map />
  </Layout>
);
export default Home;
