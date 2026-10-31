import React, { useState, MouseEvent } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import Layout from 'components/Layout';
import ImageModal from 'components/ImageModal';
import { HEADER_HEIGHT } from 'components/Layout/Header/Header.style';
import pitnaBenzynaImg from '../../public/pamiatki/pitna-benzyna.jpeg';
import plynSpryskiwaczeImg from '../../public/pamiatki/plyn-do-spryskiwaczy.jpeg';
import piernikKrolewskiImg from '../../public/pamiatki/piernik-krolewski.jpeg';
import magnes2w1Img from '../../public/pamiatki/magnes-2w1.jpeg';
import magnesNfcImg from '../../public/pamiatki/magnes-nfc.jpeg';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - ${HEADER_HEIGHT});
  padding: calc(${HEADER_HEIGHT} + 15px) 20px 80px 20px;
  background-color: #121211;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    padding-top: 30px;
    padding-bottom: 100px;
  }
`;

const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1080px;
  gap: 40px;
`;

const HeaderSection = styled.header`
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
`;

const MainTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 3px solid ${({ theme }) => theme.colors.red};
  display: inline-block;
  padding-bottom: 10px;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: #c4c4c4;
  max-width: 780px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SouvenirsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  width: 100%;
`;

const SouvenirCard = styled.article<{ $reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #1a1a19;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
    border-color: rgba(226, 31, 44, 0.35);
  }

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
    align-items: stretch;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 280px;
  cursor: pointer;
  background-color: #0d0d0c;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    width: 42%;
    min-height: 320px;
  }

  span {
    height: 100% !important;
  }
`;

const StyledImage = styled(Image)`
  transition: transform 0.35s ease;

  &:hover {
    transform: scale(1.06);
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 25px;
  width: 100%;

  @media screen and ${({ theme }) => theme.screenSizes.md} {
    width: 58%;
    padding: 40px 35px;
  }
`;

const Badge = styled.span`
  align-self: flex-start;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 12px;
`;

const SouvenirTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 15px;
  line-height: 1.35;
`;

const SouvenirDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: #eaeaea;
  line-height: 1.75;
  text-align: justify;
  margin: 0;
`;

const SOUVENIRS_DATA = [
  {
    id: 'pitna-benzyna',
    title: 'Jedyna w Polsce Pitna Benzyna',
    badge: 'Absolutny Hit',
    image: pitnaBenzynaImg,
    alt: 'Pitna Benzyna - unikalny napój ARS OLD CAR',
    description:
      '„Zatankuj” na drogę, czyli jedyna w Polsce Pitna Benzyna – nasz absolutny hit! Orzeźwiający i w 100% bezpieczny napój, który pozwoli Ci poczuć rajdowe emocje i podkręcić obroty po intensywnym zwiedzaniu. Genialny pomysł na prezent, który zaskoczy każdego kierowcę!',
  },
  {
    id: 'plyn-do-spryskiwaczy',
    title: 'Letni i Zimowy Płyn do spryskiwacza w wersji... do picia!',
    badge: 'Dla dzieci i dorosłych',
    image: plynSpryskiwaczeImg,
    alt: 'Płyn do spryskiwaczy do picia ARS OLD CAR',
    description:
      'Letni i Zimowy Płyn do spryskiwacza w wersji... do picia! – dbamy o czystość Twoich wspomnień, dlatego serwujemy autorski, „zimowy” oraz „letni” spryskiwacz przeznaczony prosto do gaszenia pragnienia. Gwarantujemy, że takiego uzupełnienia płynów nie znajdziesz na żadnej stacji benzynowej! Uwielbiany przez dzieci 😊',
  },
  {
    id: 'piernik-krolewski',
    title: 'Aromatyczny Piernik Królewski z Chęcin',
    badge: 'Lokalny Przysmak',
    image: piernikKrolewskiImg,
    alt: 'Aromatyczny Piernik Królewski z Chęcin',
    description:
      'Aromatyczny Piernik Królewski z Chęcin – Prawdziwy, lokalny przysmak wypiekany z sercem, który idealnie pasuje do naszej serwowanej na miejscu Kawy z Opony. W końcu przecież z naszego punktu widokowego spoglądamy na zamek chęciński.',
  },
  {
    id: 'magnes-2w1',
    title: 'Magnesy Niespodzianka 2w1',
    badge: 'Dla Kolekcjonerów',
    image: magnes2w1Img,
    alt: 'Magnesy Niespodzianka 2w1 z Citroënem 2CV Charleston',
    description:
      'Magnesy Niespodzianka 2w1 – zapomnij o zwykłych, płaskich magnesach na lodówkę. Nasze dwuwarstwowe magnesy-niespodzianki (m.in. z legendarnym Citroënem 2CV Charleston) to gratka dla kolekcjonerów. Odkryj, co kryje się w środku i zbierz całą serię, by stworzyć własny, miniaturowy garaż!',
  },
  {
    id: 'magnes-nfc',
    title: 'Cyfrowy Magnes Podróżnika z technologią NFC',
    badge: 'Pamiątka Przyszłości',
    image: magnesNfcImg,
    alt: 'Cyfrowy Magnes Podróżnika z technologią NFC',
    description:
      'Cyfrowy Magnes Podróżnika z technologią NFC – nasz kolejny absolutny hit! Pamiątka przyszłości w wydaniu retro! To wyjątkowy gadżet, który po zbliżeniu do telefonu otwiera wirtualne drzwi do świata interaktywnych filmów, quizów, nagród i rajdowych wspomnień. Sprawia, że cała historia naszej atrakcji turystycznej zostaje z Tobą na znacznie dłużej.',
  },
];

const PamiatkiPage: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<
    (EventTarget & { src: string; alt: string; id: string }) | null
  >(null);

  const handleModal = (event: MouseEvent<HTMLImageElement>) => {
    setModalOpen(true);
    setClickedImage(event.target as HTMLImageElement);
  };

  const allModalImages = SOUVENIRS_DATA.map((item) => ({
    asset: [
      {
        url: typeof item.image === 'string' ? item.image : item.image.src,
        id: item.id,
      },
    ] as [{ url: string; id: string }],
  }));

  return (
    <Layout>
      <Head>
        <title>Oryginalne Pamiątki | ARS OLD CAR - Muzeum Motoryzacji</title>
        <meta
          name='description'
          content='Poznaj nasze oryginalne pamiątki w ARS OLD CAR: Pitna Benzyna, Płyn do spryskiwaczy do picia, Piernik Królewski z Chęcin, Magnesy 2w1 i Cyfrowy Magnes NFC!'
        />
      </Head>
      <PageWrapper>
        <ContentColumn>
          <HeaderSection>
            <MainTitle>Poznaj nasze oryginalne pamiątki</MainTitle>
            <Subtitle>
              Odwiedź nasz muzealny sklepik i zabierz do domu niepowtarzalne
              wspomnienia z ARS OLD CAR. Sprawdź nasze autorskie, unikalne
              gadżety i przysmaki!
            </Subtitle>
          </HeaderSection>

          <SouvenirsList>
            {SOUVENIRS_DATA.map((item, index) => (
              <SouvenirCard key={item.id} $reverse={index % 2 === 1}>
                <ImageContainer>
                  <StyledImage
                    src={item.image}
                    layout='fill'
                    objectFit='cover'
                    placeholder='blur'
                    quality={95}
                    alt={item.alt}
                    id={item.id}
                    onClick={handleModal}
                  />
                </ImageContainer>
                <TextContainer>
                  <Badge>{item.badge}</Badge>
                  <SouvenirTitle>{item.title}</SouvenirTitle>
                  <SouvenirDescription>{item.description}</SouvenirDescription>
                </TextContainer>
              </SouvenirCard>
            ))}
          </SouvenirsList>
        </ContentColumn>
      </PageWrapper>

      <ImageModal
        isModalOpen={isModalOpen}
        setModalOpen={setModalOpen}
        clickedImage={clickedImage}
        allImages={allModalImages}
      />
    </Layout>
  );
};

export default PamiatkiPage;
