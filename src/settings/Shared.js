import variables from 'settings/variables';
import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 222px;
  ${variables.breakPoints.mobile} {
    max-width: 480px;
  }
  ${variables.breakPoints.tablet} {
    margin-top: 240px;
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    margin-top: 264px;
    max-width: 1440px;
  }
`;
