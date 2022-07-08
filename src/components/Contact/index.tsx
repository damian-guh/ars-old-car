import {
  Wrapper,
  MuseumDataSection,
  StyledPhoneIcon,
  StyledMailIcon,
  FlippingCardsSection,
  AddressText,
} from 'components/Contact/Contact.style';
import ContactForm from 'components/Contact/ContactForm';
import FirefighterTruckAttraction from 'components/FirefighterTruckAttraction';
import FlippingCard from 'components/FlippingCard';
import { FLIPPING_CARD_CANOES } from 'utils/constants/flippingCardsContent';
import { Map } from 'components/Layout/Map';
import { MAIL, PHONE } from 'utils/constants';

const Contact = () => (
  <>
    <Wrapper>
      <MuseumDataSection>
        <StyledMailIcon />
        <a href='mailto: kontakt@arsoldcar.pl'>{MAIL}</a>
        <StyledPhoneIcon />
        <a href='tel: 515 355 533'>{PHONE}</a>
        <AddressText>ul. Słoneczna 2A, 26-060 Wolica</AddressText>
      </MuseumDataSection>
      <ContactForm />
      <FlippingCardsSection>
        <FlippingCard content={FLIPPING_CARD_CANOES} />
        <FirefighterTruckAttraction />
      </FlippingCardsSection>
      <Map />
    </Wrapper>
  </>
);

export default Contact;
