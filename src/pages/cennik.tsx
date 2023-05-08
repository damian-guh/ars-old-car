import Layout from 'components/Layout';
import { PRICING_SECTION_TEXT } from 'utils/constants';
import styled from 'styled-components';
import Image from 'next/image';
import klotyldaImage from '../../public/klotylda.png';
import zukImage from '../../public/zuk-strazacki.jpg';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 110px 20px;
  gap: 20px;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    padding: 40px;
    grid-template-columns: 3fr 1fr;
  }
`;

const PricingSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.xl};
`;

const SectionDetails = styled.p`
  padding: 5px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
`;

const StyledImage = styled(Image)`
  border-radius: 7px;
`;

const TextAndImagesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const PricingPage = () => (
  <Layout>
    <Wrapper>
      <TextAndImagesWrapper>
        {PRICING_SECTION_TEXT.map(({ title, details }) => (
          <PricingSection key={title}>
            <SectionTitle>{title}</SectionTitle>
            {details.map((detail) => (
              <SectionDetails key={detail}>{detail}</SectionDetails>
            ))}
          </PricingSection>
        ))}
      </TextAndImagesWrapper>
      <TextAndImagesWrapper>
        <ImageWrapper>
          <StyledImage
            src={klotyldaImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='klotylda vr'
          />
        </ImageWrapper>
        <ImageWrapper>
          <StyledImage
            src={zukImage}
            layout='fill'
            quality={95}
            placeholder='blur'
            objectFit='cover'
            alt='żuk strażacki'
          />
        </ImageWrapper>
      </TextAndImagesWrapper>
    </Wrapper>
  </Layout>
);

export default PricingPage;
