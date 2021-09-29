import {
  Wrapper,
  ItemWrapper,
  ImageWrapper,
  StyledImage,
  NearbyTitle,
  NearbySectionTitle,
} from 'components/Nearby/Nearby.style';
import NEARBY_DATA from 'components/Nearby/NearbyData';

const Nearby = () => (
  <>
    <NearbySectionTitle>Atrakcje turystyczne w pobliżu</NearbySectionTitle>
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
            />
          </ImageWrapper>
        </ItemWrapper>
      ))}
    </Wrapper>
  </>
);

export default Nearby;
