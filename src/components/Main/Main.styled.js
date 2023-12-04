import variables from 'settings/variables';
import styled from 'styled-components';

export const HeroTopText = styled.div`
  width: 100%;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${variables.colors.secondColor};

  ${variables.breakPoints.tablet} {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 16px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 14px;
  }
`;

export const HeroTitleBox = styled.div`
  ${variables.breakPoints.tablet} {
    width: 50%;
    padding-right: 53px;
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  ${variables.breakPoints.onlyMobile} {
    margin-bottom: 24px;
    width: 320px;
  }
  ${variables.breakPoints.tablet} {
    font-size: 48px;
  }
  ${variables.breakPoints.desktop} {
    font-size: 64px;
  }
`;

export const HeroDescription = styled.div`
  ${variables.breakPoints.onlyMobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  ${variables.breakPoints.tablet} {
    width: 50%;
    padding-left: 11px;
  }
  ${variables.breakPoints.desktop} {
    padding-left: 161px;
    padding-right: 96px;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 36px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.64px;

  ${variables.breakPoints.tablet} {
    margin-bottom: 43px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 20px;
  }
`;

export const HeroInformation = styled.div`
  margin-bottom: 36px;
  ${variables.breakPoints.tablet} {
    display: flex;
    margin-bottom: 40px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 36px;
  }
`;
export const HeroLocation = styled.a`
  display: block;
  color: inherit;
  ${variables.breakPoints.tablet} {
    width: 50%;
  }
  ${variables.breakPoints.onlyMobile} {
    text-align: center;
  }
`;

export const HeroMailBox = styled.div`
  ${variables.breakPoints.tablet} {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding-left: 11px;
  }
  ${variables.breakPoints.desktop} {
    padding-left: 161px;
  }
`;

export const HeroMail = styled.a`
  display: block;
  color: inherit;
  ${variables.breakPoints.onlyMobile} {
    text-align: center;
  }
`;
export const Copyright = styled.p`
  display: block;
  color: inherit;
  ${variables.breakPoints.onlyMobile} {
    display: none;
  }
`;
