import { Section } from 'settings/Section';
import {
  ContactTitle,
  ContactUsBox,
  Item,
  ItemPhone,
  Link,
  List,
  ListPhone,
  Title,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <Section title="contact" id="contact">
      <ContactTitle>Contact us</ContactTitle>
      <ContactUsBox>
        <List>
          <Item>
            <Title>Phone:</Title>
            <ListPhone>
              <ItemPhone>
                <Link href="tel:+380981234567">38 (098) 12 34 567</Link>
              </ItemPhone>
              <Item>
                <Link href="tel:+380931234567">38 (093) 12 34 567</Link>
              </Item>
            </ListPhone>
          </Item>
          <Item>
            <Title>E-mail:</Title>
            <Link href="mailto:office@ecosolution.com">
              office@ecosolution.com
            </Link>
          </Item>
          <Item>
            <Title>Adress:</Title>
            <Link href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7">
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </Link>
          </Item>
          <Item>
            <Title>Social Networks:</Title>
            <a href="https://facebook.com">2222</a>
            <a href="https://instagtam.com">2222</a>
          </Item>
        </List>
      </ContactUsBox>

      <div>FORM</div>
    </Section>
  );
};

export default ContactUs;
