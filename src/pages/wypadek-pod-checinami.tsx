import Layout from 'components/Layout';
import { useState, MouseEvent } from 'react';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import ImageModal from 'components/ImageModal';
import crushChecinyImage1 from '../../public/wypadek-checiny-1.jpg';
import crushChecinyImage2 from '../../public/wypadek-checiny-2.jpg';
import crushChecinyImage3 from '../../public/wypadek-checiny-3.jpg';
import crushChecinyImage4 from '../../public/wypadek-checiny-4.jpg';
import crushChecinyImage5 from '../../public/wypadek-checiny-5.jpg';
import crushChecinyImage6 from '../../public/wypadek-checiny-6.jpg';

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
          <h3>Michał Nahorski – od zegarmistrza do mistrza kierownicy</h3>
          <TextWrapper>
            Michał Edward Nahorski pozostałby zapewne jednym z wielu zawodników,
            których życie zostało zapisane na kartach historii współczesnej
            Polski, gdyby nie jego bogaty życiorys i tragiczna, przedwczesna
            śmierć. Był porucznikiem Wojska Polskiego w okresie II wojny
            światowej, a także znanym przedwojennym i powojennym sportowcem,
            kierowcą wyścigowym, działaczem sportowym. Jego trwająca ponad
            dwadzieścia pięć lat kariera zakończyła się nieopodal zamku
            królewskiego w Chęcinach w 1959 roku. Warto wspomnieć, iż wypadek
            miał miejsce na trasie rajdu samochodowego. Wydarzenie to, choć
            wciąż jeszcze nieznane szerszemu odbiorcy, wpisuje się w najnowszą
            historię Chęcin i województwa świętokrzyskiego. Kim zatem był Michał
            Nahorski i jaką rolę odegrał w historii Polski, polskiej wojskowości
            i polskiego sportu w okresie przed- i powojennym?
          </TextWrapper>
          <TextWrapper>
            Michał Nahorski przyszedł na świat 11 września 1909 roku w
            Petersburgu w polskiej rodzinie o silnych patriotycznych korzeniach.
            Dziadek Nahorskiego, Stanisław, był działaczem polonijnym w Grodnie,
            a także mężem Elizy Orzeszkowej. Ojciec Nahorskiego pracował jako
            dyrektor banku w Petersburgu, a matka Eugenia pochodziła z Warszawy.
            Bratem Michała Nahorskiego był późniejszy oficer marynarki wojennej,
            dowódca ORP Błyskawica komandor Stanisław. W 1924 roku młody
            Nahorski przybył do Polski. Jego rodzina osiedliła się w Warszawie,
            gdzie Michał uczęszczał do gimnazjum. W 1930 roku zdał egzamin
            dojrzałości w V Rządowym Gimnazjum Filologicznym w Warszawie (znanym
            także jako V Gimnazjum Męskie). To ośmioklasowe gimnazjum męskie z
            rosyjskim językiem wykładowym pod koniec XIX wieku było największą
            taką placówką w mieście. Jego absolwentami byli m.in.: Władysław
            Tatarkiewicz, bracia Stanisław i Władysław Grabscy oraz Tadeusz
            Zieliński, historyk architektury. Stefan Dziewulski, uczeń tego
            gimnazjum, podaje, że szkoła wyróżniała się tym, że w jej gronie
            pedagogicznym było „wielu zacnych Polaków”, wśród nich m.in.
            profesorowie: Kreczmar, Maszewski. Uczniami szkoły byli synowie
            rodzin inteligenckich. Ich ojcowie, którzy przeżyli upadek powstania
            styczniowego, zalecali synom „ostrożność w stosunku do rosyjskich
            władz szkolnych, unikanie niepotrzebnego ich drażnienia, ale
            bynajmniej nie uległość wobec nich”. Do 1942 roku Nahorscy mieszkali
            w kamienicy Lothego przy Alejach Jerozolimskich 36. Po zakończeniu
            nauki w gimnazjum Michał Nahorski wstąpił do Szkoły Podchorążych
            Piechoty. W 1934 roku rozpoczął karierę sportową w Polskim Klubie
            Motocyklowym. W 1937 odbył kurs broni pancernej w stopniu
            podporucznika, a w 1938 roku szkolenie w Centrum Wyszkolenia Broni
            Pancernych w Twierdzy Modlin w stopniu porucznika. Startując w
            barwach Wojska Polskiego na motocyklu marki Rudge, zwyciężył w
            klasie 250 Junior w ostatnim przedwojennym wyścigu o Grand Prix
            Polski w Warszawie we wrześniu 1938 roku. W 1939 wygrał III Rajd
            Tatrzański na motocyklu TWN w klasie 350. Po ukończeniu szkoły
            podchorążych Michał Nahorski, poza uczestniczeniem w zawodach, jako
            oficer broni pancernej Wojska Polskiego II RP pełnił służbę w 11.
            Batalionie Pancernym, doświadczalnym i manewrowym pododdziale
            podporządkowanym komendantowi Centrum Wyszkolenia Broni Pancernych w
            Twierdzy Modlin.
          </TextWrapper>
          <TextWrapper>
            Już po zakończeniu wojny obronnej, w dniu 8 listopada 1939 roku,
            Michał Nahorski dostał się do niewoli. Był więźniem obozów: Oflag
            VII C Laufen, Oflag XI B Braunschweig oraz Oflag II C Woldenberg. W
            tym ostatnim (numer obozowy 1803/Oflag XI B) stał się członkiem
            konspiracji antyniemieckiej. Oflag ten był największym niemieckim
            obozem dla jeńców wojennych. Michał Nahorski – członek plutonu
            łączności. Na przełomie 1941 i 1942 roku była to jednostka
            konspiracyjna w oflagu, która w 1944 roku przekształciła się w
            kompanię szturmową. Jej celem było utrzymanie szyfrowego kontaktu
            radiowego z krajem i zagranicą za pomocą zakonspirowanych
            odbiorników radiowych i stacji nadawczej, prowadzenie codziennego
            nasłuchu radiowego oraz opracowanie planu obrony i walki z
            hitlerowską załogą obozu.
          </TextWrapper>
          <TextWrapper>
            W okresie powojennym Nahorski zajmuje się odbudową polskiego sportu
            motorowego, współtworzy Polski Związek Motocyklowy. Jest także
            prekursorem budowy pierwszych polskich powojennych samochodów
            sportowych tzw. SAMów w zespole konstrukcyjnym inżyniera Adama
            Małochleba i Rudolfa Wrocławskiego w Katowicach. Nahorski był
            typowany do startu w Rajdzie Monte Carlo. Majac już na koncie kilka
            tytułów Mistrza Polski wystartował w międzynarodowym Rajdzie
            Tulipanów, znanym też jako Rajd Adriatyku. Trasa wiodła z Warszawy
            przez Kraków do Cieszyna, a następnie do byłej Jugosławii. W dniu 22
            lipca 1959 roku, kilka godzin po starcie z Warszawy Nahorski na
            drodze biegnącej przez Chęciny (tzw. Serpentyny) uderzył w drzewo, a
            samochód dachował. Kanistry z benzyną, umieszczone za siedzeniami,
            eksplodowały. Kierowca i pilot Jan Langer zginęli w płomieniach.
          </TextWrapper>
          <TextWrapper>
            Mieczysław Sochacki, który w 1958 roku wywalczył tytuł wicemistrza
            Polski i Kazimierz Osiński z Automobilklubu Krakowskiego po latach
            wspominali tragiczny wypadek: „ Z Warszawy ruszyliśmy po południu,
            trzy godziny później na zakrętach za Chęcinami spotkaliśmy leżące do
            góry kołami i płonące auto Nahorskiego i Langera. Byliśmy pierwsi
            przy wypadku. Płomienie sięgały linii telegraficznej, do Triumpha
            nie dało się zbliżyć. Zużyliśmy nasze gaśnice bez żadnego efektu”.
          </TextWrapper>
          <TextWrapper>
            W miejscu wypadku postawiono pamiątkowy obelisk wykonany z
            szydłowieckiego piaskowca. M. Nahorski pośmiertnie odznaczony został
            medalem Zasłużony Mistrz Sportu. Pochowany w grobie rodzinnym w
            Warszawie. Najprawdopodobniej jest to związane z tym, iż do 1942
            roku rodzice Nahorskiego mieszkali w Warszawie, przy al.
            Jerozolimskich nr 36 (kamienica Lothego), a następnie przeprowadzili
            się do dzielnicy Włochy. M. Nahorski spoczywa na cmentarzu parafii
            św. Teresy od Dzieciątka Jezus w Warszawie (lokalizacja grobu:
            sektor C2, rząd 3, numer 9) wraz ze swymi rodzicami - Eugenią z d.
            Maliszewską oraz Edwardem Nahorskimi.
          </TextWrapper>
          <TextWrapper>
            Postać Michała Nahorskiego była przedmiotem zainteresowania polskiej
            i zagranicznej prasy od lat przedwojennych aż do tragicznej śmierci
            w 1959 roku. O tragicznym wypadku duetu M. Nahorski – J. Langer na
            trasie rajdu u podnóży zamku królewskiego w Chęcinach pisała prasa
            polska i zagraniczna, zarówno polskojęzyczna, jak i obcojęzyczna. Na
            uwagę zasługują zwłaszcza artykuły z prasy amerykańskiej, a także
            szwajcarskiej oparte na doniesieniach Agence France-Presse. I tak o
            wypadku donosiły m.in. Gazeta Krakowska, Słowo Ludu, Dziennik
            Związkowy – Polish Daily Zgoda z Chicago, Kuryer Polski - Organ Ludu
            Polskiego na Wychodźstwie z Milwaukee czy Dziennik Genewski.
          </TextWrapper>
          <TextWrapper>
            Bibliografia:
            <ul>
              <li>„Motor,” 18.01.1959, nr 3 (352), s. 11</li>
              <li>
                Dramat w Chęcinach, „WRC – Magazyn Rajdowy”, nr 35, 08.2004, s.
                6
              </li>
              <li>
                Krzysztof Kasiński, Michał Nahorski – żołnierz i sportowiec w
                służbie Polsce, w: Elżbieta Słabińska (red.), Rocznik
                Świętokrzyski, Seria A – Nauki Humanistyczne, t. 38, s. 77–93,
                2023.
              </li>
              <li>
                Kwerenda Wiesława Dembka ze Stowarzyszenia „Woldenberczycy” –
                korespondencja elektroniczna z dn. 29.10.2023 r.
              </li>
              <li>
                Miron Zarudzki, Ruch oporu w obozie jenieckim w Dobiegniewie
                (Oflag II C Woldenberg) 1940-1945, „Wojskowy Przegląd
                Historyczny”, 1978, nr 2 (84), Warszawa, s. 194
              </li>
            </ul>
          </TextWrapper>
          <TextWrapper>
            <p>
              Michal Nahorski – from a clock master to a steering wheel master
            </p>
            Michał Nahorski was undoubtedly a very interesting figure in the
            years preceding and following the second war in Poland. A graduate
            of the famous 5th Junior High School in Warsaw, a member of a
            military sports club, a motorcyclist, a soldier and a participant in
            the defensive war of 1939, a prisoner of war camps, a watchmaker,
            and above all, the creator of Polish motorsport revived after the
            war and the most successful racing driver of the 1950s. The
            successes were suddenly interrupted by a tragic death on the rally
            route. During the concentration stage of the 1959 Adriatic Rally,
            Michał Nahorski and his co-driver Jan Langer crashed near Chęciny,
            Poland, in a fast downhill after crossing the city. Both men died
            upon impact. The accident occurred on 22 July 1959. Their Triumph
            TR-2 went out of control on a sharp hairpin, and fell into a ravine
            ending several meters down. It hit a tree and almost immediately
            caught fire, both men were burned to death. The accident occurred
            four hours after the start from Warsaw, Poland, on the way to Zadar
            in then Yugoslavia, where the concentration stage was scheduled to
            finish. The causes of the accident are still unclear. These included
            a burst tire, slipping on oil spilled on the road and a crack in the
            steering system. A memorial stone was erected in honour of the two
            competitors in the place of the accident. Michał Nahorski was one of
            the most expert rally drivers of Poland, six times winner of the
            national title. Jan Langer was a Polish engineer specialized in the
            manufacture of early post-war racing cars. Winners of the 1959
            Adriatic Rally were French team - Paul Coltelloni and Pierre
            Alexandre.
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
