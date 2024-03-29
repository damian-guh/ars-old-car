import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  padding: 15px;
  margin-top: 80px;
  text-align: center;
  gap: 10px;
`;
