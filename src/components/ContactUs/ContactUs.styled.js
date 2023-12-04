import variables from 'settings/variables';
import styled from 'styled-components';

export const ContactUsBox = styled.div`
  width: 50%;
`;

export const ContactTitle = styled.h2`
  margin-bottom: 24px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  ${variables.breakPoints.tablet} {
    margin-bottom: 40px;
    font-size: 36px;
  }
  ${variables.breakPoints.desktop} {
    margin-bottom: 120px;
    font-size: 48px;
  }
`;

export const Title = styled.h3`
  font-weight: 400;
  margin-bottom: 8px;

  ${variables.breakPoints.desktop} {
    margin-bottom: 16px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${variables.breakPoints.desktop} {
    gap: 32px;
  }
`;

export const Item = styled.li``;

export const ListPhone = styled.ul``;

export const ItemPhone = styled.li``;
export const Link = styled.a`
  color: inherit;
  font-size: 20px;
  letter-spacing: -0.8px;
  ${variables.breakPoints.desktop} {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;
