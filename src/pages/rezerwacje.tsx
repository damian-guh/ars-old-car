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

const ReservationPage: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <FormSectionWrapper>
          <StyledHeading>Zarezerwuj termin już teraz!</StyledHeading>
          <StyledInfoP>
            Rezerwacja możliwa jest telefonicznie lub mailowo.
          </StyledInfoP>
          <StyledInfoP>
            Podaj liczbę osób, interesujący Cię termin najpóźniej 1 dzień przed
            nim oraz ewentualne szczegóły.
          </StyledInfoP>
          <StyledInfoP>
            E-mail: <a href={mailHref}>{MAIL}</a>
          </StyledInfoP>
          <StyledInfoP>
            Telefon: <a href={phoneHref}>{PHONE}</a>
          </StyledInfoP>
        </FormSectionWrapper>
        <FlippingCardSection>
          <FirefighterTruckAttraction />
          <FlippingCard content={FLIPPING_CARD_COMPANY_EVENTS} />
        </FlippingCardSection>
      </Wrapper>
    </Layout>
  );
};

export default ReservationPage;
