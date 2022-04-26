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
      'Majówka z ARS OLD CAR',
      'Zapraszamy w dniach 29.04-3.05 w godz. 9:30-17:00.',
      'Zaczynamy tydzień przed majówką w dniach 22-24.04',
      '22.04.2022 - Dzień otwarty, bezpłatny wstęp dla mieszkańców gminy Chęciny',
      '23.04.2022 – Otwarcie sezonu 2022, wstęp dla posiadaczy zaproszeń',
      '24.04.2022 – Dzień otwarty, bezpłatny wstęp dla miłośników motoryzacji',
      'Muzeum czynne: od 22.04 do 2.10.2022',
      'Piątek – Niedziela godz. 9:30-17:00',
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
