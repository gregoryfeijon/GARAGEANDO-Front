import React, {Component} from 'react';

import {View} from 'react-native';

import colors from '~/styles/colors';

// import { Container } from './styles';

export default class screens extends Component {
  state = {};

  static navigationOptions = {
    title: 'GARAGEANDO',
    headerStyle: {
      backgroundColor: colors.backgroundWhite,
    },
    headerTintColor: colors.fontHeaderColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  render() {
    return <View />;
  }
}
