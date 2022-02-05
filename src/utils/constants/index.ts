export const APP_NAME = 'Ars Old Car';
export const APP_AUTHOR = 'Damian Głuch';
export const APP_DESC =
  'Nieoczywiste muzeum, rodzinne miejsce miłośników motoryzacji, w niebanalny sposób ukazujący świat odchodzącej historii pojazdów, które możemy oglądać praktycznie już tylko w takich miejscach';

export const NAV_ITEMS = [
  'Aktualności',
  'Galeria',
  '#LUBIE2CV',
  'Rezerwacje',
  'W okolicy',
  'Kontakt',
];

export const MAIL = 'kontakt@arsoldcar.pl';
export const PHONE = '515 355 533';

export const LATITUDE =
  process.env.NODE_ENV === 'production' ? 50.7479 : 52.2377;
export const LONGITUDE =
  process.env.NODE_ENV === 'production' ? 20.4697 : 20.9937;

export const OPENING_MUSEUM_HOUR = 10;
export const CLOSING_MUSEUM_HOUR = 20;

export const PRICING_SECTION_TEXT = [
  '25 zł – bilet indywidualny',
  '20 zł – bilet grupowy powyżej 10 osób (bezpłatny wstęp dla opiekuna grupy)',
  'Bezpłatny wstęp dla kierowców pojazdów zabytkowych odwiedzających ARS OLD CAR',
  'Wstęp dla osób w wieku od 4 do 99 lat.',
  'Miejsce przyjazne dla zwierząt - Zapraszamy fanów motoryzacji wraz z czworonogami',
  'Miejsce przyjazne rowerzystom - Przygotowaliśmy stojaki dla Waszych rowerów.',
];
