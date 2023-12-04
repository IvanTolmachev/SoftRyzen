import React from 'react';
import { BtnBurger, Header, HeaderBox, Navigation } from './Header.styled';
import LogoComponent from './Logo/Logo';
import ButtonCircle from 'components/Buttons/ButtonCircle';
import { Container } from 'settings/Container';

const HeaderComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <HeaderBox>
      <Container>
        <Header>
          <LogoComponent />
          <Navigation>
            <BtnBurger></BtnBurger>
            <ButtonCircle onClick={handleClick} label="Get in touch" />
          </Navigation>
        </Header>
      </Container>
    </HeaderBox>
  );
};

export default HeaderComponent;
