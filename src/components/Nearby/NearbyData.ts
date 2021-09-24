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
    distance: '2,8KM',
    image: PedzikowImage,
  },
  {
    title: 'Spływ kajakiem "Bastek"',
    distance: '1,9KM',
    image: KayakImage,
  },
  {
    title: 'Zamek Królewski w Chęcinach',
    distance: '8,3KM',
    image: ChecinyCastleImage,
  },
  {
    title: 'Jaskinia Raj',
    distance: '11,9KM',
    image: CaveImage,
  },
  {
    title: 'Zamek Rycerski w Sobkowie',
    distance: '12,9KM',
    image: SobkowCastleImage,
  },
  {
    title: 'ZOO "Leśne zacisze"',
    distance: '16,5KM',
    image: ZooImage,
  },
  {
    title: 'Centrum Nauki Leonardo Da Vinci',
    distance: '6,7KM',
    image: DavinciCenterImage,
  },
  {
    title: 'Muzeum Wsi Kieleckiej w Tokarni',
    distance: '5,4KM',
    image: VillageMuseumImage,
  },
  {
    title: 'Europejskie Centrum Edukacji Geologicznej',
    distance: '9,3KM',
    image: GeoCenterImage,
  },
  {
    title: 'Niemczówka',
    distance: '8,7KM',
    image: NiemczowkaImage,
  },
  {
    title: 'Stary Młyn w Wolicy',
    distance: '1,9KM',
    image: MillImage,
  },
  {
    title: 'Muzeum Garncarstwa w Chałupkach',
    distance: '11,5KM',
    image: PotteryCenterImage,
  },
];

export default NEARBY_DATA;
