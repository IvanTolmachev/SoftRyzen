import React from 'react';
import { BtnBurger, Header, HeaderBox, Navigation } from './Header.styled';
import LogoComponent from './Logo/Logo';
import ButtonCircle from 'components/Buttons/ButtonCircle';
import { Container } from 'settings/Container';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WrapperAnimation } from 'components/BurgerMenu/BurgerMenu.styled';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <HeaderBox>
      {isMenuOpen && <div className="backdrop"></div>}
      <Container>
        <Header>
          <LogoComponent />
          <Navigation>
            <BtnBurger onClick={() => toggleMenu()}></BtnBurger>
            <ButtonCircle onClick={handleClick} label="Get in touch" />
          </Navigation>
          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <WrapperAnimation>
                <BurgerMenu toggleMenu={toggleMenu} />
              </WrapperAnimation>
            )}
          </AnimatePresence>
        </Header>
      </Container>
    </HeaderBox>
  );
};

export default HeaderComponent;
