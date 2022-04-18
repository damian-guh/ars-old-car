import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Map = styled.iframe.attrs(() => ({
  src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10097.972043348715!2d20.4697656!3d50.7478915!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16c188f0f4675b70!2sArs%20Old%20Car!5e0!3m2!1spl!2spl!4v1631353928905!5m2!1spl!2spl',
  title: 'arsoldcar-location',
  allowFullScreen: false,
  loading: 'lazy',
}))`
  width: 100%;
  height: 450px;
  border: none;
  overflow-x: hidden;
  grid-row: 4/5;

  @media screen and ${({ theme }) => theme.screenSizes.lg} {
    grid-column: 1/3;
    grid-row: 3/3;
  }
`;
