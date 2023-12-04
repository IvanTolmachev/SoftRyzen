import variables from 'settings/variables';
import styled from 'styled-components';

export const LogoImg = styled.img`
  padding: 6px 0;
`;
export const LinkLogo = styled.a`
  display: flex;
  align-items: center;
  height: 40px;
  color: ${variables.colors.primaryColor};
  cursor: pointer;
  user-select: none;
  text-decoration: none;
`;
export const CompanyTitle = styled.p`
  margin-left: 4px;
  margin-right: 4px;

  font-size: 33px;
  color: ${variables.colors.primaryColor};
`;
export const SpanGreen = styled.span`
  color: ${variables.colors.secondColor};
`;

export const CompanySlogan = styled.div`
  font-size: 10px;
  width: 60px;
  text-transform: uppercase;
  color: ${variables.colors.primaryColor};
`;
