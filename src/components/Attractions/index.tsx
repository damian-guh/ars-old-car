import {
  AttractionsWrapper,
  ImageWrapper,
  StyledImage,
} from 'components/Attractions/Attractions.style';
import forest2CVImage from '../../../public/2cv-forest.png';

const Attractions = () => (
  <AttractionsWrapper>
    <div>
      Wystawa 2CV WORLD poświęcona jednemu z najbardziej charakterystycznych
      klasyków w dziejach motoryzacji zwanym &quot;Brzydkim Kaczątkiem&quot;,
      &quot;Kaczką&quot; czy też &quot;Parasolem na czterech kołach&quot;. Z tej
      okazji można zobaczyć największą kolekcję gadżetów związanych z tym
      samochodem, w tym zaskakującą kolekcję &quot;kaczek&quot;.
    </div>
    <ImageWrapper>
      <StyledImage
        src={forest2CVImage}
        layout='fill'
        quality={100}
        placeholder='blur'
        objectFit='cover'
        alt='2CV w lesie'
      />
    </ImageWrapper>
  </AttractionsWrapper>
);

export default Attractions;
