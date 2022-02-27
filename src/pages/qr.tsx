import Layout from 'components/Layout';
import styled from 'styled-components';

const QrInfoSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 50px;
  padding: 10px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const QrPage = () => (
  <Layout>
    <QrInfoSection>
      Konkursy QR dostępne są po przybyciu do muzeum 🏛
    </QrInfoSection>
  </Layout>
);

export default QrPage;
