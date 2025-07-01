import type { NextPage } from 'next';
import Layout from 'components/Layout';
import {
  FormSectionWrapper,
  StyledHeading,
  StyledInfoP,
  Wrapper,
  FlippingCardSection,
} from 'components/Reservation/Reservation.style';
import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
import FlippingCard from 'components/FlippingCard';
import { FLIPPING_CARD_COMPANY_EVENTS } from 'utils/constants/flippingCardsContent';
import { MAIL, PHONE } from 'utils/constants';

const mailHref = `mailto:${MAIL}`;
const phoneHref = `tel:${PHONE}`;

const ReservationPage: NextPage = () => (
  <Layout>
    <Wrapper>
      <FormSectionWrapper>
        <StyledHeading>Zarezerwuj termin już dzisiaj!</StyledHeading>
        <StyledInfoP>
          Rezerwacja telefoniczna:
          <a href={phoneHref}> {PHONE} lub </a>
          <a href='tel:508084688'>508 084 688</a>
        </StyledInfoP>
        <StyledInfoP>
          Rezerwacja mailowa (minimum 1 dzień wcześniej). Podaj liczbę osób,
          interesujący Cię termin oraz ewentualne szczegóły:
          <a href={mailHref}> {MAIL}</a>
        </StyledInfoP>
      </FormSectionWrapper>
      <FlippingCardSection>
        <FirefighterTruckAttraction />
        <FlippingCard content={FLIPPING_CARD_COMPANY_EVENTS} />
      </FlippingCardSection>
    </Wrapper>
  </Layout>
);

export default ReservationPage;
