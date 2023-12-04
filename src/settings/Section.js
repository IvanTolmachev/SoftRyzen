import variables from 'settings/variables';
import styled from 'styled-components';

export const Section = styled.section`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 36px 0;

  ${variables.breakPoints.mobile} {
    max-width: 480px;
  }
  ${variables.breakPoints.tablet} {
    padding: 100px 0;
    max-width: 768px;
  }
  ${variables.breakPoints.desktop} {
    padding: 120px 0;
    max-width: 1440px;
  }
`;
