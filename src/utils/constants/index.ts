export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  { title: 'Aktualności' },
  { title: 'Świat VR' },
  { title: 'Rezerwuj bilet', subtitles: ['Cennik', 'Rezerwacje'] },
  { title: 'Oferta dla grup' },
  { title: 'W okolicy' },
  {
    title: 'E-Sklepik',
    customUrl: 'https://giftmasz.pl/kategoria/muzeum-ars-old-car/',
  },
  { title: 'Kontakt' },
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
      'Muzeum czynne: od 19.04 do 06.10.2024',
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
