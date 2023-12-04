import variables from 'settings/variables';
import styled from 'styled-components';

export const FAQBox = styled.div`
  width: 50%;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const FAQQuestions = styled.div`
  padding: 16px 0;
  border-top: 1px solid ${variables.colors.secondColor};
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
  }
`;
export const FAQQuestion = styled.div`
  display: flex;
  gap: 8px;
  ${variables.breakPoints.tablet} {
    gap: 15px;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const TitleQuestion = styled.h3`
  font-size: 18px;
  letter-spacing: -0.72px;
  margin-bottom: 16px;
  ${variables.breakPoints.desktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
