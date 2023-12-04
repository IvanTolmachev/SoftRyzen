import styled from 'styled-components';
import variables from 'settings/variables';

export const Circle = styled.div`
  margin-left: 12px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${variables.colors.primaryColor};
`;

export const CircleArrow = styled.div`
  display: flex;
  align-items: center;
  margin-left: 12px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${variables.colors.secondColor};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  min-width: 130px;
  height: 39px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background-color: ${variables.colors.secondColor};

  &:hover,
  &:focus {
    color: ${variables.colors.secondColor};
    background-color: ${variables.colors.primaryColor};
    ${Circle} {
      background-color: ${variables.colors.secondColor};
    }
  }
`;

export const ButtonArrow = styled.button`
  display: flex;
  align-items: center;
  padding: 3.5px 4px 3.5px 16px;
  height: 39px;
  min-width: 100px;
  border-radius: 20px;
  border: 1px solid ${variables.colors.secondColor};
  cursor: pointer;
  background-color: inherit;

  &:hover,
  &:focus {
    color: ${variables.colors.secondColor};
    background-color: ${variables.colors.primaryColor};
    border: none;
  }
`;
