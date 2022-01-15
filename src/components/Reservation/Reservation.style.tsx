import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 25px;
  padding: 5px;
  text-align: center;
`;
