import variables from 'settings/variables';
import styled from 'styled-components';

export const FAQBlock = styled.div`
  position: relative;
`;

export const FAQTitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  ${variables.breakPoints.onlyMobile} {
    margin-bottom: 24px;
    right: 71px;
  }
  ${variables.breakPoints.tablet} {
    position: absolute;
    right: 61px;
    font-size: 36px;
  }
  ${variables.breakPoints.desktop} {
    font-size: 48px;
  }
`;

export const FAQModule = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const FAQBox = styled.div`
  ${variables.breakPoints.tablet} {
    width: 50%;
    padding-right: 12px;
  }
  ${variables.breakPoints.desktop} {
    padding-right: 23px;
  }
`;

export const FAQContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  ${variables.breakPoints.tablet} {
    position: relative;
    padding-left: 11px;
    width: 50%;
  }
  ${variables.breakPoints.desktop} {
    padding-left: 161px;
  }
`;

export const FAQQuestions = styled.div`
  padding-top: 16px;
  border-top: 1px solid ${variables.colors.secondColor};
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
  }
`;
export const FAQQuestion = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  ${variables.breakPoints.tablet} {
    gap: 15px;
  }
  ${variables.breakPoints.desktop} {
  }
`;

export const TitleQuestion = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  letter-spacing: -0.72px;
  ${variables.breakPoints.desktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
    margin-bottom: 24px;
  }
`;

export const TextQuestion = styled.p`
  margin-bottom: 16px;
  font-size: 14px;
  letter-spacing: -0.56px;
  ${variables.breakPoints.desktop} {
    font-size: 16px;
    letter-spacing: -0.64px;
    margin-bottom: 24px;
  }
`;

export const ContactUsQuestion = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  letter-spacing: -0.56px;
  ${variables.breakPoints.desktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
