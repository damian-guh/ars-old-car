import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FaFacebookF as FacebookIcon } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram as InstagramIcon } from '@react-icons/all-files/fa/FaInstagram';
import GlobalStyles from 'styles/GlobalStyles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
`;

const Heading = styled.h1`
  font-size: 25px;
  letter-spacing: 3px;
  text-align: center;
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;

  div {
    margin: 10px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 250px;
  position: relative;
`;

const SocialWrapper = styled.section`
  display: flex;
  font-size: 35px;

  svg {
    height: 35px;
    margin: 15px;
  }
`;

const Home: NextPage = () => (
  <>
    <GlobalStyles />
    <Head>
      <title>Ars Old Car</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
        rel='stylesheet'
      />
    </Head>
    <Wrapper>
      <Image src='/logo.png' width={256} height={256} />
      <Heading>Muzeum i strona w budowie 🏗️</Heading>
      <Heading>Otwarcie wkrótce️</Heading>
      <Heading>Obserwuj nas na bieżąco!️</Heading>
      <SocialWrapper>
        <a
          href='https://www.facebook.com/ARS-OLD-CAR-Muzeum-Motoryzacji-137529865169438'
          target='_blank'
          rel='noreferrer'
        >
          <FacebookIcon />
        </a>
        <a
          href='https://www.instagram.com/ars_old_car/'
          target='_blank'
          rel='noreferrer'
        >
          <InstagramIcon />
        </a>
      </SocialWrapper>
      <GallerySection>
        <ImageContainer>
          <Image src='/background.png' layout='fill' objectFit='contain' />
        </ImageContainer>
        <ImageContainer>
          <Image src='/train.png' layout='fill' objectFit='contain' />
        </ImageContainer>
      </GallerySection>
    </Wrapper>
  </>
);

export default Home;
