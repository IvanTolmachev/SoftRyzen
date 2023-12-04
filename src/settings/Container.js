import variables from 'settings/variables';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 360px;
  margin: 0 auto;
  padding: 0 20px;
  ${variables.breakPoints.mobile} {
    max-width: 480px;
  }
  ${variables.breakPoints.tablet} {
    padding: 0 30px;
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    padding: 0 100px;
    max-width: 1440px;
  }
`;
