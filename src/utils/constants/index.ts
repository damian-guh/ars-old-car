export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  { title: 'Aktualności' },
  { title: 'Galeria' },
  { title: 'Konkursy', subtitles: ['#LUBIE2CV', 'QR'] },
  { title: 'Kup bilet', subtitles: ['Cennik', 'Rezerwacje'] },
  { title: 'W okolicy' },
  { title: 'Kontakt' },
  {
    title: 'Sklepik',
    customUrl: 'https://giftmasz.pl/kategoria/muzeum-ars-old-car/',
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
      '25 zł – bilet indywidualny',
      '20 zł – bilet grupowy powyżej 10 osób',
      '25 zł - trasa widokowa wozem strażackim (rezerwacja w kasie muzeum)',
      'Bezpłatny wstęp dla kierowców pojazdów zabytkowych odwiedzających ARS OLD CAR',
      'Bezpłatny wstęp dla dzieci w wieku od 4 do 6 lat',
      'Wstęp dla osób w wieku od 4 do 99 lat.',
    ],
  },
  {
    title: 'Godziny otwarcia i wydarzenia',
    details: [
      'Muzeum czynne: od 22.04 do 2.10.2022',
      'Piątek – Niedziela godz. 9:30-17:00',
      '(Wejście na wystawę 2CV World o godzinie: 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00)',
      'Poniedziałek - Czwartek – czynne dla rezerwacji grup zorganizowanych - minimum 10 osób',
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
