import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { ReactComponent as IconArrow } from '../../images/arrow-right.svg';
import { ReactComponent as IconCross } from '../../images/close-light.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Menu } from '../../images/menu.svg';
import { motion } from 'framer-motion';
import variables from 'settings/variables';

export const MobMenu = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 30;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  border-radius: 25px;
  width: 272px;
  height: 653px;
  padding: 24px 24px;
`;
export const IconX = styled(IconCross)`
  margin-right: 4px;
  stroke: white;
  transition: stroke 0.25s linear;
`;
export const BtnClose = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${variables.colors.primaryWhite};
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.8px;
  padding: 0px;
  transition: color 0.25s linear;
  &:hover,
  &:focus {
    color: ${variables.colors.secondColor};
    & > ${IconX} {
      stroke: ${variables.colors.secondColor};
    }
  }
`;

export const IconArrows = styled(IconArrow)`
  margin-left: 8px;
  stroke: rgba(255, 255, 255, 0.25);
  transition: stroke 0.25s linear;
`;
export const NavLinks = styled(Link)`
  color: rgba(255, 255, 255, 0.25);
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: color 0.25s linear;
  &:hover,
  &:focus {
    color: rgba(255, 255, 255, 1);
    & ~ ${IconArrows} {
      stroke: ${variables.colors.primaryWhite};
    }
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
export const ListItem = styled(motion.li).attrs({
  initial: { opacity: 0, y: '-310%' },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.6, ease: 'easeInOut' },
})`
  display: flex;
  align-items: center;
`;
export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;
export const SomeLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${variables.colors.primaryWhite};
  margin-bottom: 24px;
`;
export const SocLinlWrap = styled.div`
  display: flex;
  flex: 1;
  align-items: end;
  gap: 8px;
`;
export const IconFacebook = styled(Facebook)``;
export const IconInstagram = styled(Instagram)`
  stroke: ${variables.colors.primaryWhite};
  transition: stroke 0.25s linear;
  cursor: pointer;
  &:hover {
    stroke: ${variables.colors.secondColor};
  }
`;
export const MenuBtnBurger = styled(Menu)`
  transition: transform 0.25s linear;
  &:active {
    transform: scale(1.2);
  }
`;

export const WrapperAnimation = styled(motion.div).attrs({
  initial: { x: '200%' },
  animate: { x: 0 },
  exit: { x: '200%' },
  transition: { duration: 0.4, ease: 'easeInOut' },
})`
  position: absolute;
  top: 36px;
  right: 0;
  ${variables.breakPoints.desktop} {
    top: 24px;
  }
`;
