import variables from 'settings/variables';
import styled from 'styled-components';

export const ElectricityDistanceBox = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const ElectricityTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-family: 'Oswald', sans-serif;
  line-height: 1;
  text-transform: uppercase;
  ${variables.breakPoints.tablet} {
    font-size: 36px;
  }
  ${variables.breakPoints.desktop} {
    font-size: 48px;
  }
`;

export const BoxLine = styled.div`
  margin: 24px 0;
  width: 50%;
  height: 48px;
  border-right: 1px solid ${variables.colors.secondColor};
  ${variables.breakPoints.tablet} {
    height: 87px;
  }
  ${variables.breakPoints.desktop} {
    margin: 16px 0;
  }
`;

export const ElectricityDistance = styled.p`
  margin-right: 8px;
  font-family: 'Oswald', sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  color: ${variables.colors.secondColor};
  text-transform: uppercase;
  ${variables.breakPoints.tablet} {
    margin-right: 24px;
    font-size: 100px;
  }
  ${variables.breakPoints.desktop} {
    font-size: 164px;
  }
`;
