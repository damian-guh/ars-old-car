import Layout from 'components/Layout';
import { PRICING_SECTION_TEXT } from 'utils/constants';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 20px;
  justify-items: center;

  @media screen and ${({ theme }) => theme.screenSizes.xl} {
    padding: 40px;
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

const PricingPage = () => (
  <Layout>
    <Wrapper>
      {PRICING_SECTION_TEXT.map(({ title, details }) => (
        <PricingSection key={title}>
          <SectionTitle>{title}</SectionTitle>
          {details.map((detail) => (
            <SectionDetails key={detail}>{detail}</SectionDetails>
          ))}
        </PricingSection>
      ))}
    </Wrapper>
  </Layout>
);

export default PricingPage;
