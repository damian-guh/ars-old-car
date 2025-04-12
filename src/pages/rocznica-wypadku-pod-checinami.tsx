import Layout from 'components/Layout';
import { useState, MouseEvent } from 'react';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import ImageModal from 'components/ImageModal';
import crushChecinyImage1 from '../../public/1rocznica.jpg';
import crushChecinyImage2 from '../../public/2rocznica.jpg';
import crushChecinyImage3 from '../../public/3rocznica.jpg';
import crushChecinyImage4 from '../../public/4rocznica.jpg';
import crushChecinyImage5 from '../../public/5rocznica.jpg';
import crushChecinyImage6 from '../../public/6rocznica.jpg';
import crushChecinyImage7 from '../../public/7rocznica.jpg';
import crushChecinyImage8 from '../../public/8rocznica.jpg';
import crushChecinyImage9 from '../../public/9rocznica.jpg';
import crushChecinyImage10 from '../../public/10rocznica.jpg';
import crushChecinyImage11 from '../../public/11rocznica.jpg';
import crushChecinyImage12 from '../../public/12rocznica.jpg';
import crushChecinyImage13 from '../../public/13rocznica.jpg';
import crushChecinyImage14 from '../../public/14rocznica.jpg';
import crushChecinyImage15 from '../../public/15rocznica.jpg';

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
  text-align: justify;
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
  { asset: [{ url: crushChecinyImage1.src, id: 'wypadek-checiny-1' }] },
  { asset: [{ url: crushChecinyImage2.src, id: 'wypadek-checiny-2' }] },
  { asset: [{ url: crushChecinyImage3.src, id: 'wypadek-checiny-3' }] },
  { asset: [{ url: crushChecinyImage4.src, id: 'wypadek-checiny-4' }] },
  { asset: [{ url: crushChecinyImage5.src, id: 'wypadek-checiny-5' }] },
  { asset: [{ url: crushChecinyImage6.src, id: 'wypadek-checiny-6' }] },
  { asset: [{ url: crushChecinyImage7.src, id: 'wypadek-checiny-7' }] },
  { asset: [{ url: crushChecinyImage8.src, id: 'wypadek-checiny-8' }] },
  { asset: [{ url: crushChecinyImage9.src, id: 'wypadek-checiny-9' }] },
  { asset: [{ url: crushChecinyImage10.src, id: 'wypadek-checiny-10' }] },
  { asset: [{ url: crushChecinyImage11.src, id: 'wypadek-checiny-11' }] },
  { asset: [{ url: crushChecinyImage12.src, id: 'wypadek-checiny-12' }] },
  { asset: [{ url: crushChecinyImage13.src, id: 'wypadek-checiny-13' }] },
  { asset: [{ url: crushChecinyImage14.src, id: 'wypadek-checiny-14' }] },
  { asset: [{ url: crushChecinyImage15.src, id: 'wypadek-checiny-15' }] },
];

const CrashChecinyPage = () => {
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
            W niedzielę 21 lipca 2024 r. w Chęcinach spotkali się pasjonaci
            historii i motoryzacji. Okazją ku temu były uroczystości
            upamiętniające dwóch wybitnych kierowców rajdowych Michała
            Nahorskiego i Jana Langera, którzy 22 lipca 1959 r. zginęli
            tragicznie podczas Rajdu Adriatyckiego w wypadku pod Chęcinami, na
            jednym z zakrętów drogi biegnącej obok Zamku Królewskiego.
          </TextWrapper>
          <TextWrapper>
            Na &quot;serpentynach&quot;, przy obelisku upamiętniającym tragiczne
            wydarzenie o godz. 12.00 wysłuchaliśmy utworu „Cisza” wykonanego na
            trąbce przez Kubę Kowalskiego.
          </TextWrapper>
          <TextWrapper>
            Były przemówienia, odsłonięcie pamiątkowej tablicy, złożenie wieńców
            i zapalenie zniczy. Następnie kolumna samochodów zabytkowych
            przejechała do Centrum Kultury i Sportu w Chęcinach, gdzie
            wysłuchaliśmy wykładu dr Krzysztofa Kasińskiego „Michał Nahorski –
            Od zegarmistrza do mistrza kierownicy”. Dzięki uprzejmości P.
            Marcina Dambka z Polskie Miejsca Pamięci zobaczyliśmy krótki film
            nagrany po wypadku, który dotychczas nie był nigdzie wyświetlany.
          </TextWrapper>
          <TextWrapper>
            W kolejnej części spotkania wystąpił prof. Wiesław Dembek, Prezes
            Stowarzyszenia Woldenberczycy, który opowiedział o Michale Nahorskim
            nawiązując do czasów pobytu w obozie jenieckim Oflag II C
            Woldenberg, gdzie Porucznik Michał Nahorski był członkiem słynnego
            plutonu radiowego „R”. W obozie pełnił funkcję ochrony bunkra
            radiowego, znajdującego się w pomieszczeniu kantyny poprzedzającym
            pokój księgowości, w którym zamaskowane piecykiem wejście prowadziło
            do bunkra.
          </TextWrapper>
          <TextWrapper>
            Następnie dr Krzysztof Kasiński oraz Marcin Dambek opowiedzieli
            niezwykle ciekawą historię odnalezienia rodziny Michała Nahorskiego,
            archiwalnych zdjęć, filmu oraz oryginalnego znaczka, który pochodzi
            ze spalonego samochodu Triumph TR2, którym jechali Michał Nahorski i
            Jan Langer 22 lipca 1959 roku. Wśród aut, które pojawiły się na
            zlocie był również Triumph TR2 oraz TR3. Specjalne statuetki zostały
            wręczone osobom oraz grupom, które w sposób szczególny dbają o
            pamięć tragicznie zmarłych kierowców.
          </TextWrapper>
          <TextWrapper>
            Na zewnątrz odbywał się motopiknik oldtimerów, można było również
            skosztować potraw przygotowanych przez koła gospodyń wiejskich, a o
            najmłodszych uczestników zadbali wolontariusze. Na zakończenie
            uroczystości o godzinie 17 na Rynku w Chęcinach odbył się koncert
            francuskiego wokalisty Francois.
          </TextWrapper>
          <TextWrapper>
            Organizatorami uroczystości byli: ARS OLD CAR - Muzeum Motoryzacji w
            Wolicy, Zamek Królewski w Chęcinach, Regionalne Centrum
            Naukowo-Technologiczne w Podzamczu.
          </TextWrapper>
          <TextWrapper>
            Patronat honorowy: Ministerstwo Sportu i Turystyki; Urząd
            Marszałkowski Województwa Świętokrzyskiego, Starostwo Powiatowe w
            Kielcach, Gmina Chęciny, Muzeum Woldenberczyków w Dobiegniewie,
            Centralne Muzeum Jeńców Wojennych, Stowarzyszenie Woldenberczyków.
          </TextWrapper>
          <TextWrapper>
            Patronat: Regionalna Organizacja Turystyczna Województwa
            Świętokrzyskiego, PTTK Oddział Świętokrzyski w Kielcach.
          </TextWrapper>
          <TextWrapper>
            Patronat medialny: TVP3 Kielce, Automobilista.
          </TextWrapper>
          <TextWrapper>
            Szczególne podziękowania: dr Krzysztof Kasiński, P. Marcin Dambek,
            prof. Wiesław Dembek, Burmistrz Robert Jaworski, Centrum Kultury i
            Sportu w Chęcinach, Zamek Królewski w Chęcinach, Automobil Klub Koło
            Zapasowe, sponsorzy i partnerzy, a także wszystkim uczestnikom i
            mieszkańcom Gminy Chęciny.
          </TextWrapper>
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

export default CrashChecinyPage;
