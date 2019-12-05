import React, {Component} from 'react';

import {View, StyleSheet, Platform, UserInput} from 'react-native';

const branco = '#FFF';

export default class LoginSquare extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login}>
          <UserInput
            placeholder="Username"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.texto}
          />
          <UserInput
            placeholder="Password"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.texto}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: branco,
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  texto: {
    borderStyle: 'solid',
    borderRadius: 3,
    borderColor: '#000',
  },
});
