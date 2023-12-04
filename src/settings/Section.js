import variables from 'settings/variables';
import styled from 'styled-components';

export const Section = styled.section`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 36px;

  ${variables.breakPoints.mobile} {
    max-width: 480px;
  }
  ${variables.breakPoints.tablet} {
    padding-bottom: 100px;
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    padding-bottom: 120px;
    max-width: 1440px;
  }
`;
