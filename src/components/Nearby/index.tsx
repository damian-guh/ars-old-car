import {
  Wrapper,
  ItemWrapper,
  ImageWrapper,
  StyledImage,
  NearbyTitleSectionWrapper,
  NearbyTitle,
  NearbySectionTitle,
  NearbyDesc,
} from 'components/Nearby/Nearby.style';
import NEARBY_DATA from 'components/Nearby/NearbyData';

const Nearby = () => (
  <>
    <NearbyTitleSectionWrapper>
      <NearbySectionTitle>Atrakcje turystyczne w pobliżu</NearbySectionTitle>
      <NearbyDesc>
        Zapraszamy do Nas wszystkich fanów motoryzacji, ale nie tylko. Jeśli
        chcesz spędzić w okolicy cały dzień, weekend lub wręcz kilka dni
        zorganizujemy dla Ciebie program atrakcji i pokażemy Ci miejsca, które
        nie zawsze są oczywistym wyborem. Napisz do Nas lub zadzwoń. Podaj tylko
        datę pobytu, ilość osób i ich wiek, a resztą się już zajmiemy.
      </NearbyDesc>
    </NearbyTitleSectionWrapper>
    <Wrapper>
      {NEARBY_DATA.map(({ title, distance, image }, index) => (
        <ItemWrapper key={title}>
          <NearbyTitle index={index}>
            {title} ({distance})
          </NearbyTitle>
          <ImageWrapper index={index}>
            <StyledImage
              src={image}
              layout='fill'
              quality={95}
              placeholder='blur'
              objectFit='cover'
              alt={title}
            />
          </ImageWrapper>
        </ItemWrapper>
      ))}
    </Wrapper>
  </>
);

export default Nearby;
