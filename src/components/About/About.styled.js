import variables from 'settings/variables';
import styled from 'styled-components';

export const MainValues = styled.div`
  width: 100%;
  margin-bottom: 36px;

  ${variables.breakPoints.tablet} {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 75px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 124px;
  }
`;

export const MainTitle = styled.h2`
  display: block;

  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  ${variables.breakPoints.onlyMobile} {
    padding-right: 97px;
    margin-bottom: 32px;
    max-width: 440px;
  }
  ${variables.breakPoints.tablet} {
    padding-right: 82px;
    width: 50%;
    border-right: 1px solid ${variables.colors.secondColor};
    font-size: 36px;
  }
  ${variables.breakPoints.desktop} {
    font-size: 48px;
    padding-right: 254px;
  }
`;

export const MainDescription = styled.p`
  ${variables.breakPoints.tablet} {
    width: 50%;
    padding-left: 11px;
  }
  ${variables.breakPoints.desktop} {
    padding-left: 161px;
  }
`;

export const AboutDescription = styled.div`
  display: flex;
  gap: 24px;
  ${variables.breakPoints.onlyMobile} {
    flex-direction: column;
  }

  ${variables.breakPoints.desktop} {
    gap: 48px;
  }
`;

export const AboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${variables.breakPoints.tablet} {
    width: calc((100% - 24px) / 2);
  }
  ${variables.breakPoints.desktop} {
    width: calc((100% - 48px) / 2);
  }
`;

export const AboutList = styled.ul`
  display: flex;
  gap: 24px;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
    gap: 48px;
  }
`;

export const Picture = styled.picture`
  ${variables.breakPoints.onlyMobile} {
    display: none;
  }
`;

export const AboutItem = styled.li`
  padding: 12px;
  height: 197px;
  width: calc((100% - 24px) / 2);
  background-color: ${variables.colors.backgroundColorCard};
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
    padding: 24px;
    height: 339px;
    width: calc((100% - 48px) / 2);
  }
`;

export const AboutTitle = styled.h3`
  margin-bottom: 12px;
  padding-bottom: 33px;
  font-family: Oswald;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
  border-bottom: 1px solid ${variables.colors.secondColor};
  ${variables.breakPoints.tablet} {
    padding-bottom: 51px;
    font-size: 18px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 24px;
    padding-top: 24px;
    padding-bottom: 94px;
    font-size: 32px;
  }
`;
export const AboutText = styled.p`
  font-size: 14px;
  ${variables.breakPoints.tablet} {
  }
  ${variables.breakPoints.desktop} {
    font-size: 16px;
  }
`;
