import Layout from 'components/Layout';
import { PRICING_SECTION_TEXT } from 'utils/constants';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
`;

const showBox = keyframes`
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
`;

const showContent = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-2%);
  }
  100% {
    opacity: 100%;
    transform: translateX(0);
  }
`;

const StyledDetails = styled.details`
  margin: 30px 0;
  position: relative;

  summary {
    font-size: 24px;
    list-style: none;
    cursor: pointer;
  }

  summary::after {
    position: absolute;
    left: -50px;
    display: inline-block;
    content: '>';
    margin-left: 20px;
    transition: transform 0.2s ease-in-out;
    transform: rotate(90deg);
  }

  summary:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.red};
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }

  &[open] div {
    display: block;
  }

  div {
    display: none;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.5s ease-in-out 1 forwards ${showBox};
    font-size: 18px;
    line-height: 1.5;
    margin: 20px 0;
    padding: 20px 40px 20px 20px;
    p {
      opacity: 0;
      animation: 0.3s 0.6s ease-in 1 forwards ${showContent};
    }
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      summary::-webkit-details-marker {
        display: none;
      }

      summary:focus {
        outline: 3px solid ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

const PricingPage = () => (
  <Layout>
    <Wrapper>
      {PRICING_SECTION_TEXT.map(({ title, details }) => (
        <StyledDetails key={title}>
          <summary>{title}</summary>
          <div>
            {details.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </StyledDetails>
      ))}
    </Wrapper>
  </Layout>
);

export default PricingPage;
