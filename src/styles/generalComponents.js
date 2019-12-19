import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Error = styled.Text`
  color: ${colors.danger};
  margin-top: ${metrics.baseMargin + 10}px;
  margin-bottom: ${metrics.baseMargin + 10}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Success = styled.Text`
  color: ${colors.success};
  margin-top: ${metrics.baseMargin + 10}px;
  margin-bottom: ${metrics.baseMargin + 10}px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
