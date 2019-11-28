import React, {Component} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Button,
  UserInput,
  Text,
  Platform,
} from 'react-native';

import colors from '~/styles/colors';
import {black} from 'ansi-colors';

const branco = '#FFF';

export default class ScreenLogin extends Component {
  static navigationOptions = {
    title: 'GARAGEANDO',
    headerStyle: {
      backgroundColor: colors.backgroundWhite,
    },
    headerTintColor: colors.headerColor,
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
  };

  irParaCriarConta = () => {
    const {navigation} = this.props;
    navigation.navigate('CadastroUsuario');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <View style={styles.login}>
            <TextInput
              placeholder="Username"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
            <TextInput
              placeholder="Password"
              autoCapitalize={'none'}
              returnKeyType={'done'}
              autoCorrect={false}
            />
          </View>
        </View>
        <View style={styles.opcoes}>
          <Button
            color={black}
            title={'Create Account'}
            style={styles.text}
            onPress={() => this.irParaCriarConta()}
          />
          <Button
            color={black}
            title={'Forgot Password?'}
            style={styles.text}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.headerColor,
    alignContent: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },

  login: {
    justifyContent: 'center',
    alignItems: 'flex-start',
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

  opcoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  text: {
    color: 'black',
  },
});
