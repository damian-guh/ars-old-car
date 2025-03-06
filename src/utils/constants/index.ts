export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  {
    title: '22.07.1959',
    customUrl: 'https://arsoldcar.pl/wypadek-pod-checinami',
    subtitles: [],
  },
  {
    title: 'O nas',
    customUrl: null,
    subtitles: [
      {
        title: 'Kim jesteśmy',
        customUrl: null,
        subtitles: [],
      },
      {
        title: 'Media o nas',
        customUrl: null,
        subtitles: [
          {
            title: 'Francuskie 3',
            customUrl:
              'https://francuskie.pl/citroen-2cv-oczami-siostry-klotyldy-i-pitna-benzyna-nowa-atrakcja-w-muzeum-motoryzacji-pod-kielcami/',
            subtitles: [],
          },
          {
            title: 'Chęciny',
            customUrl:
              'https://www.checiny.pl/asp/pl_start.asp?typ=13&menu=169&dzialy=169&akcja=artykul&artykul=17834',
            subtitles: [],
          },
          {
            title: 'Francuskie 2',
            customUrl:
              'https://francuskie.pl/z-milosci-do-marki-citroen-zalozyl-wlasne-muzeum/',
            subtitles: [],
          },
          {
            title: 'Francuskie 1',
            customUrl:
              'https://francuskie.pl/ruszylo-nowe-muzeum-motoryzacji-skupione-na-citroenie-2cv/',
            subtitles: [],
          },
          {
            title: 'Em',
            customUrl: '/em.pdf',
            subtitles: [],
          },
        ],
      },
    ],
  },
  {
    title: 'Aktualności',
    customUrl: null,
    subtitles: [],
  },
  {
    title: 'Świat VR',
    customUrl: null,
    subtitles: [],
  },
  {
    title: 'Rezerwuj bilet',
    customUrl: null,
    subtitles: [
      {
        title: 'Cennik',
        customUrl: null,
        subtitles: [],
      },
      {
        title: 'Rezerwacje',
        customUrl: null,
        subtitles: [],
      },
    ],
  },
  {
    title: 'Oferta dla grup',
    customUrl: null,
    subtitles: [],
  },
  {
    title: 'W okolicy',
    customUrl: null,
    subtitles: [],
  },
  {
    title: 'Kontakt',
    customUrl: null,
    subtitles: [],
  },
];

export const MAIL = 'kontakt@arsoldcar.pl';
export const PHONE = '515 355 533';

export const LATITUDE =
  process.env.NODE_ENV === 'production' ? 50.7479 : 50.8904;
export const LONGITUDE =
  process.env.NODE_ENV === 'production' ? 20.4697 : 20.6278;

export const OPENING_MUSEUM_HOUR = 10;
export const CLOSING_MUSEUM_HOUR = 16;

export const PRICING_SECTION_TEXT = [
  {
    title: 'Bilety',
    details: [
      'Normalny – 45 zł',
      'Ulgowy 7-26* – 40 zł',
      'Ulgowy 4-6**– 30 zł',
      'Dzieci do 3 roku życia – bezpłatnie ',
      'Rodzinny (Karta Dużej Rodziny) każdy z członków rodziny 38 zł',
      'Rodzinny zwykły (2+2) – 160 zł',
      '\n*Bilety ulgowe przysługują: dzieciom, młodzieży i studentom (od 7 do 26 roku życia), rencistom, emerytom i osobom niepełnosprawnym. -Pakiet 3',
      '**Bilety ulgowe przysługują: dzieciom (od 4 do 6 roku życia)- Pakiet 2',
      'Pakiet 3 składa się z: wystawa Świat 2CV z przewodnikiem, jazda autem strażackim do ruin Willi Hempla oraz  na punkt widokowy, Świat VR - Tajemnice Willi Hempla',
      'Pakiet 2 składa się z: wystawa Świat 2CV z przewodnikiem, jazda autem strażackim do ruin Willi Hempla oraz  na punkt widokowy',
      'Bilety grupowe powyżej 10 osób',
    ],
  },
  {
    title: 'Godziny otwarcia i wydarzenia',
    details: [
      'Muzeum czynne: od 29.04 do 30.10.2025',
      'Piątek - Sobota – Niedziela godz. 10:45-17:00',
      '(Wejście na wystawę Świat 2CV o godzinie: 11:00, 12:30, 14:00, 15:30)',
      'Czas pobytu w muzeum 90-120 minut',
      'Poniedziałek - Czwartek – czynne dla rezerwacji grup zorganizowanych - minimum 10 osób',
      'UWAGA ILOŚĆ BILETÓW NA KAŻDĄ GODZINĘ JEST OGRANICZONA!',
    ],
  },
  {
    title: 'Dodatkowe informacje',
    details: [
      'Miejsce przyjazne dla zwierząt - Zapraszamy fanów motoryzacji wraz z czworonogami',
      'Miejsce przyjazne rowerzystom - Przygotowaliśmy stojaki dla Waszych rowerów.',
    ],
  },
];
