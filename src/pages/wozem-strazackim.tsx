import Image from 'next/legacy/image';
import styled from 'styled-components';
import Layout from 'components/Layout';
import leafletImage from '../../public/ulotka.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  div {
    position: relative;
    width: 300px;
    margin-top: 60px;

    @media screen and ${({ theme }) => theme.screenSizes.md} {
      width: 600px;
    }
  }
`;

const FirefighterAttractionPage = () => (
  <Layout>
    <Wrapper>
      <div>
        <Image
          src={leafletImage}
          placeholder='blur'
          alt='ulotka-trasa-widokowa'
        />
      </div>
    </Wrapper>
  </Layout>
);

export default FirefighterAttractionPage;
