import Layout from 'components/Layout';
import { useState, MouseEvent } from 'react';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import ImageModal from 'components/ImageModal';
import OurImage1 from '../../public/o-nas-1.jpg';
import OurImage2 from '../../public/o-nas-2.jpg';
import OurImage3 from '../../public/o-nas-3.jpg';
import OurImage4 from '../../public/o-nas-4.jpg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.md};
  gap: 15px;
  padding: 100px 20px;
  margin: 40px 0;

  > * {
    max-width: 1000px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
`;

const TextSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;

  a {
    font-weight: bold;
  }
`;

const TextWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  video {
    width: 300px;
    height: 200px;
    border-radius: 10px;
  }

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-template-columns: repeat(2, 1fr);
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
  { asset: [{ url: OurImage1.src, id: 'o-nas-1' }] },
  { asset: [{ url: OurImage2.src, id: 'o-nas-2' }] },
  { asset: [{ url: OurImage3.src, id: 'o-nas-3' }] },
  { asset: [{ url: OurImage4.src, id: 'o-nas-4' }] },
];

const WhoWeArePage = () => {
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
        <TextSectionWrapper>
          <TextWrapper>
            ARS OLD CAR – Muzeum Motoryzacji to przedsięwzięcie rodzinne, które
            zrodziło się pod wpływem naszego zainteresowania turystyką,
            podróżami zarówno zagranicznymi 🚤 🛩️jak i po Polsce 🚔🚖, ostatnio
            w szczególności w Świętokrzyskie 🚲🛴oraz oczywiście niezwykłej i
            wyjątkowej słabości do Citroena 2CV 🚕🚓. Pragniemy, aby nasze
            muzeum było miejscem zaskakującej rozrywki dla odwiedzających w
            każdym wieku i niezależnie od płci.
          </TextWrapper>
          <TextWrapper>
            Miejsce to nie przypomina klasycznego muzeum motoryzacji ponieważ
            nasze samochody są tylko pretekstem do opowieści w sposób zabawny i
            humorystyczny nie tylko o nich, ale również o okolicy, jej
            mieszkańcach, pobliskich atrakcjach i ciekawostkach historycznych. W
            naszym muzeum historia przeplata się z nowoczesnością, w trakcie
            przejażdżki Żukiem strażackim 🚒🧯🚗 docieramy do ruin Willi Hempla,
            gdzie poznajemy jej historię, a następnie zwiedzamy ją w środku w
            wirtualnym świecie VR za pomocą specjalnych okularów 👓 🥽, której
            technologii VR sami zresztą jesteśmy producentem.
          </TextWrapper>
          <TextWrapper>
            Podpatrujemy najlepszych i każdego roku wprowadzamy nowe pomysły,
            zapraszamy do Nas ciekawe osoby, odwiedzili nas np. rycerze z
            pobliskiego Zamku Królewskiego w Chęcinach, wojaki Szwejki, artyści
            malarze, ale „wychodzimy„ też na zewnątrz🏖️ 🏜️uczestnicząc w różnego
            rodzaju zlotach, motopiknikach, imprezach kulturalnych i
            turystycznych, gramy też co roku z WOŚP.
          </TextWrapper>
          <TextWrapper>
            Na deser kilka słów o Citroenie 2CV🛺🚘 samochodzie, który
            rozsławiła seria filmów o „Żandarmie z Saint Tropez„ z
            niezapomnianym Louis de Funes. Auto to jest motywem przewodnim w
            naszych wnętrzach z bogatą kolekcją różnego rodzaju gadżetów,
            obrazów, modeli samochodów🚜🚛, Wycinankami Dudały, autografami
            znanych postaci – miłośników 2CV oraz niezwykłą wystawą kolekcji
            samochodów szydełkowanych.
          </TextWrapper>
          <TextWrapper>Do zobaczenia w naszym muzeum! 🚦⏳</TextWrapper>
        </TextSectionWrapper>
        <div>
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
        </div>
      </Wrapper>
    </Layout>
  );
};

export default WhoWeArePage;
