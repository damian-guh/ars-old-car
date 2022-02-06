import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: calc(100vw - 20px);

  .image-gallery-image {
    height: 400px !important;
    padding: 10px;

    @media (orientation: landscape) {
      height: 200px !important;
    }

    @media (min-width: 1024px) {
      height: 500px !important;
    }
  }

  .image-gallery-icon:hover {
    color: ${({ theme }) => theme.colors.red};
  }

  .image-gallery-bullet:hover {
    background-color: ${({ theme }) => theme.colors.red} !important;
    border-color: ${({ theme }) => theme.colors.red} !important;
  }
`;

export const GalleryDescWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const GalleryDesc = styled.p`
  max-width: 500px;
  text-align: justify;
  padding: 15px;
`;
