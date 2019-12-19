import styled from 'styled-components/native';

import {colors, metrics} from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.headerColor};
  align-items: center;
`;

export const Titulo = styled.Text`
  font-size: 28;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;
