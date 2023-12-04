import variables from 'settings/variables';
import styled from 'styled-components';

export const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  background-color: ${variables.colors.primaryWhite};
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 360px;
  padding: 36px 0;
  margin: 0 auto;
`;

export const Navigation = styled.div`
  display: flex;
`;

export const BtnBurger = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
  width: 39px;
  height: 39px;
  border-radius: 50%;
  color: ${variables.colors.burgerBtnColor};
  background-color: ${variables.colors.burgerBtnBgColor};
`;
