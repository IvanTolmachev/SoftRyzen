import React from 'react';
import {
  BtnClose,
  MobMenu,
  NavLinks,
  IconArrows,
  ListItem,
  List,
  IconX,
  BtnWrapper,
  SomeLine,
  SocLinlWrap,
  IconFacebook,
  IconInstagram,
} from './BurgerMenu.styled';
const BurgerMenu = ({ toggleMenu }) => {
  return (
    <>
      <MobMenu>
        <BtnWrapper>
          <BtnClose onClick={() => toggleMenu()} type="button">
            <IconX />
            close
          </BtnClose>
        </BtnWrapper>
        <SomeLine />
        <div>
          <List>
            <ListItem>
              <NavLinks
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                Main
              </NavLinks>
              <IconArrows />
            </ListItem>
            <ListItem>
              <NavLinks
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                About
              </NavLinks>
              <IconArrows />
            </ListItem>
            <ListItem>
              <NavLinks to="#">Cases</NavLinks>
              <IconArrows />
            </ListItem>
            <ListItem>
              <NavLinks
                activeClass="active"
                to="FAQ"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
              >
                FAQ
              </NavLinks>
              <IconArrows />
            </ListItem>
            <ListItem>
              <NavLinks
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                Contact Us
              </NavLinks>
              <IconArrows />
            </ListItem>
          </List>
        </div>

        <SocLinlWrap>
          <IconFacebook />
          <IconInstagram />
        </SocLinlWrap>
      </MobMenu>
    </>
  );
};

export default BurgerMenu;
