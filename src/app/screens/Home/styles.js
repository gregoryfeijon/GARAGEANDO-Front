import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.headerColor};
  align-items: center;
`;

export const SubHeader = styled.View`
  background: ${colors.regular};
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  width: 100;
  height: 100;
  margin-top: ${metrics.baseMargin}px;
`;

export const TextTeste = styled.Text`
  font-size: 16;
  color: ${colors.white};
  font-weight: bold;
`;
