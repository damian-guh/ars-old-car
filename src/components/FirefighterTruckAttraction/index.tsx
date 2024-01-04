import Link from 'next/link';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import firefighterTruckImage from '../../../public/firefighter-truck.jpg';

const FirefighterTruckAttractionCard = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.headerGray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  text-align: center;
`;

const FirefighterTruckAttraction = () => (
  <Link href='/wozem-strazackim'>
    <FirefighterTruckAttractionCard>
      <Image
        src={firefighterTruckImage}
        alt='wóz-strażacki'
        placeholder='blur'
      />
      <h3>Trasa widokowa wozem strażackim</h3>
    </FirefighterTruckAttractionCard>
  </Link>
);

export default FirefighterTruckAttraction;
