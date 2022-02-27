import {
  PedzikowImage,
  ChecinyCastleImage,
  GeoCenterImage,
  DavinciCenterImage,
  SobkowCastleImage,
  KayakImage,
  PotteryCenterImage,
  MillImage,
  NiemczowkaImage,
  ZooImage,
  VillageMuseumImage,
  CaveImage,
} from 'helpers/importAllNearbyImages';

const NEARBY_DATA = [
  {
    title: 'Gród Pędzików',
    distance: '2,8km',
    image: PedzikowImage,
    link: 'https://www.grodpedzikow.pl/',
  },
  {
    title: 'Spływ kajakiem "Bastek"',
    distance: '1,9km',
    image: KayakImage,
    link: 'https://nidy.pl/',
  },
  {
    title: 'Zamek Królewski w Chęcinach',
    distance: '8,3km',
    image: ChecinyCastleImage,
    link: 'https://zamek.checiny.pl/pl/',
  },
  {
    title: 'Jaskinia Raj',
    distance: '11,9km',
    image: CaveImage,
    link: 'https://jaskiniaraj.pl/',
  },
  {
    title: 'Zamek Rycerski w Sobkowie',
    distance: '12,9km',
    image: SobkowCastleImage,
    link: 'http://www.zameksobkow.eu/',
  },
  {
    title: 'ZOO "Leśne zacisze"',
    distance: '16,5km',
    image: ZooImage,
    link: 'http://www.lesne-zacisze.net/',
  },
  {
    title: 'Centrum Nauki Leonardo Da Vinci',
    distance: '6,7km',
    image: DavinciCenterImage,
    link: 'https://cndavinci.pl/',
  },
  {
    title: 'Muzeum Wsi Kieleckiej w Tokarni',
    distance: '5,4km',
    image: VillageMuseumImage,
    link: 'https://www.mwk.com.pl/',
  },
  {
    title: 'Europejskie Centrum Edukacji Geologicznej',
    distance: '9,3km',
    image: GeoCenterImage,
    link: 'https://www.eceg.uw.edu.pl/',
  },
  {
    title: 'Niemczówka',
    distance: '8,7km',
    image: NiemczowkaImage,
    link: 'https://niemczowka.pl/',
  },
  {
    title: 'Stary Młyn w Wolicy',
    distance: '1,9km',
    image: MillImage,
    link: 'https://goo.gl/maps/fnSyGK3hZRKS4BNMA',
  },
  {
    title: 'Muzeum Garncarstwa w Chałupkach',
    distance: '11,5km',
    image: PotteryCenterImage,
    link: 'https://www.morawica.pl/asp/pl_start.asp?typ=14&sub=125&menu=131&strona=1',
  },
];

export default NEARBY_DATA;
