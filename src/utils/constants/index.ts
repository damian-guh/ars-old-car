export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujące świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  { title: 'Aktualności' },
  { title: 'Galeria' },
  { title: 'Konkursy', subtitles: ['#LUBIE2CV', 'QR'] },
  { title: 'Kup bilet', subtitles: ['Rezerwacje', 'Cennik'] },
  { title: 'W okolicy' },
  { title: 'Kontakt' },
];

export const MAIL = 'kontakt@arsoldcar.pl';
export const PHONE = '515 355 533';

export const LATITUDE =
  process.env.NODE_ENV === 'production' ? 50.7479 : 50.8904;
export const LONGITUDE =
  process.env.NODE_ENV === 'production' ? 20.4697 : 20.6278;

export const OPENING_MUSEUM_HOUR = 10;
export const CLOSING_MUSEUM_HOUR = 20;

export const PRICING_SECTION_TEXT = [
  { text: '25 zł – bilet indywidualny', bold: true },
  {
    text: '20 zł – bilet grupowy powyżej 10 osób (bezpłatny wstęp dla opiekuna grupy)',
    bold: true,
  },
  {
    text: 'Bezpłatny wstęp dla kierowców pojazdów zabytkowych odwiedzających ARS OLD CAR',
    bold: true,
  },
  { text: 'Wstęp dla osób w wieku od 4 do 99 lat.', bold: false },
  {
    text: 'Miejsce przyjazne dla zwierząt - Zapraszamy fanów motoryzacji wraz z czworonogami',
    bold: false,
  },
  {
    text: 'Miejsce przyjazne rowerzystom - Przygotowaliśmy stojaki dla Waszych rowerów.',
    bold: false,
  },
  {
    text: 'Majówka z ARS OLD CAR',
    bold: true,
  },
  {
    text: 'Zapraszamy w dniach 29.04-3.05 w godz. 10-17.',
    bold: false,
  },
  {
    text: 'Zaczynamy tydzień przed majówką w dniach 22-24.04',
    bold: true,
  },
  {
    text: '22.04.2022 - Dzień otwarty, bezpłatny wstęp dla mieszkańców gminy Chęciny',
    bold: false,
  },
  {
    text: '23.04.2022 – Otwarcie sezonu 2022, wstęp dla posiadaczy zaproszeń',
    bold: false,
  },
  {
    text: '24.04.2022 – Dzień otwarty, bezpłatny wstęp dla miłośników motoryzacji',
    bold: false,
  },
];
