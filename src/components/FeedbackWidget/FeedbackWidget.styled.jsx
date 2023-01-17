import styled from 'styled-components';
import { theme } from 'theme';

export const Title = styled.h3`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.primary};
  margin-bottom: ${p => p.theme.space[5]};
  margin-left: auto;
  margin-right: auto;
`;

export const SubTitle = styled.h4`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.accent};
  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[3]};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: 400;
  color: ${p => p.theme.colors.secondary};
`;
