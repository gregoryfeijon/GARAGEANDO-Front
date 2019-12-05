import React, {Component} from 'react';

import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import colors from '~/styles/colors';

export default class Login extends Component {
  state = {
    usuarioDTO: {
      id: '',
      login: '',
      senha: '',
      email: '',
      usuario: null,
      usuarios: null,
    },
    token: '',
  };

  handleLoginClick = () => {};

  handleCriarContaClick = () => {
    this.props.navigation.navigate('CadastroUsuario');
  };

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.menu}>
          <Image
            source={require('~/assets/iconeGarageando.png')}
            resizeMode="contain"
            style={styles.logo}
          />

          <TextInput
            placeholder="Usuário"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />

          <TextInput
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => this.handleLoginClick()}
            style={styles.botao}>
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>

          <TouchableHighlight
            style={styles.signUpStyle}
            onPress={() => this.handleCriarContaClick()}>
            <Text style={styles.signUpText}>Criar conta</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.headerColor,
    justifyContent: 'center',
    alignItems: 'center',
  },

  menu: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },

  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    color: '#000',
  },

  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#000',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },

  signUpStyle: {
    padding: 10,
    marginTop: 20,
  },

  signUpText: {
    color: '#999',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
