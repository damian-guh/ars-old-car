import Layout from 'components/Layout';
import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import ImageModal from 'components/ImageModal';
import OfferImage1 from '../../public/oferta-dla-szkol-1.jpg';
import OfferImage2 from '../../public/oferta-dla-szkol-2.jpg';
import OfferImage3 from '../../public/oferta-dla-szkol-3.jpg';
import OfferImage4 from '../../public/oferta-dla-szkol-4.jpg';
import OfferImage5 from '../../public/oferta-dla-szkol-5.jpg';
import OfferImage6 from '../../public/oferta-dla-szkol-6.jpg';
import OfferImage7 from '../../public/oferta-dla-szkol-7.jpg';
import OfferImage8 from '../../public/oferta-dla-szkol-8.jpg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  gap: 15px;
  padding: 20px;
  margin: 40px 0;

  > * {
    max-width: 1000px;
  }
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  cursor: pointer;

  span {
    border-radius: 10px;
  }
`;

const images = [
  { asset: [{ url: OfferImage1.src, id: 'oferta-dla-szkol-1' }] },
  { asset: [{ url: OfferImage2.src, id: 'oferta-dla-szkol-2' }] },
  { asset: [{ url: OfferImage3.src, id: 'oferta-dla-szkol-3' }] },
  { asset: [{ url: OfferImage4.src, id: 'oferta-dla-szkol-4' }] },
  { asset: [{ url: OfferImage5.src, id: 'oferta-dla-szkol-5' }] },
  { asset: [{ url: OfferImage6.src, id: 'oferta-dla-szkol-6' }] },
  { asset: [{ url: OfferImage7.src, id: 'oferta-dla-szkol-7' }] },
  { asset: [{ url: OfferImage8.src, id: 'oferta-dla-szkol-8' }] },
];

const OfferForSchoolsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string; id: string }) | null
  >(null);
  // @ts-ignore
  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  return (
    <Layout>
      <Wrapper>
        <h2>Oferta dla szkół i przedszkoli</h2>
        <div>
          <p>
            Zapraszamy grupy z przedszkoli i szkół na żywą lekcję motoryzacji na
            wesoło.
          </p>
          <p>Tu historia motoryzacji spotyka się z zabawą 📖🎉🥳✌</p>
        </div>
        <div>
          <p>Zapraszamy do Nas ❤</p>
        </div>
        <p>Program wycieczki do ARS OLD CAR obejmuje:</p>
        <p>
          - przejażdżka zabytkowym samochodem strażackim na punkt widokowy, z
          którego będziemy podziwiać m.in. Zamek Chęciński,
        </p>
        <p>
          - przejazd do ruin willi Hempla, gdzie zapoznamy się z historią
          obiektu
        </p>
        <p>
          - zwiedzanie największej w Polsce wystawy poświęconej samochodowi
          znanego z filmu Żandarm z Saint Tropez, kultowego Citroena 2CV
        </p>
        <p>- konkursy motoryzacyjne QR dla dzieci</p>
        <p>- prezentacje multimedialne &quot;wokół motoryzacji&quot;</p>
        <p>- gry i zabawy na &quot;świeżym powietrzu&quot;</p>
        <p>- czas wolny</p>
        <p>- ognisko</p>
        <p>
          - posiłek (kiełbaska z grilla, pieczone ziemniaki , pieczywo, sosy,
          herbata)
        </p>
        <p>- możliwość zamówienia cateringu</p>
        <p>
          Czas trwania wycieczki około 3 godzin. Koszt zwiedzania z posiłkiem to
          35 zł od osoby (opiekunowie nie płacą), bez posiłku 20 zł. Każdy
          uczestnik wycieczki dostanie pamiątkową naklejkę samochodu 2CV.
        </p>
        <p>Na miejscu do nabycia tematyczne pamiątki !</p>
        <p>Parking dla autokaru , dojazd bezpośrednio pod wejście do muzeum.</p>
        <b>Dodatkowa atrakcja - świat wirtualny VR ( nowość w 2023 !!! )</b>
        <b>Tylko 7 minut od Chęcin.</b>
        <b>Muzeum otwarte w 2023 r. w okresie 15 kwiecień - 20 październik</b>
        <b>
          W przypadku wycieczek kilkudniowych służymy pomocą w organizacji trasy
          pobytu, doboru atrakcji turystycznych, noclegów oraz cateringu.
        </b>
        <p>ZAPRASZAMY‼️❤</p>
        <a href='mailto:kontakt@arsoldcar.pl'>
          📧 e-mail: kontakt@arsoldcar.pl
        </a>
        <a href='tel:+48 515 355 533'>☎️ tel: +48 515 355 533</a>
        <ImagesWrapper>
          {images.map(({ asset }) => (
            <ImageWrapper key={asset[0].id}>
              <Image
                src={asset[0].url}
                layout='fill'
                quality={95}
                objectFit='cover'
                onClick={(event) => handleModal(event)}
              />
            </ImageWrapper>
          ))}
        </ImagesWrapper>
        <ImageModal
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
          clickedImage={clickedImage}
          // @ts-ignore
          allImages={images}
        />
      </Wrapper>
    </Layout>
  );
};

export default OfferForSchoolsPage;
