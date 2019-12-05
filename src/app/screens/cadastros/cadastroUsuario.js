import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

import colors from '~/styles/colors';

import api from '~/app/services';

import '~/config/DevToolsConfig';

export default class CadastroUsuario extends Component {
  state = {
    usuario: {
      nome: '',
      cpf: '',
      dataNasc: null,
      email: '',
      celular: '',
      telefone: '',
      login: '',
      senha: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        nome: null,
        cpf: null,
        dataNasc: null,
        email: null,
        celular: null,
        telefone: null,
        login: null,
        senha: null,
      },
    };
  }

  handleChangeFor = (propertyName, propertyValue) => {
    this.setState(state => {
      return {
        ...state,
        usuario: {
          ...state.usuario,
          [propertyName]: propertyValue,
        },
      };
    });
  };

  handleConfirmarContaClick = async () => {
    const response = await api.post('/api/usuario', this.state);
    console.log(response);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>CADASTRO DE USUÁRIO</Text>
        <ScrollView style={styles.menu}>
          <TextInput
            placeholder="Nome"
            autoCapitalize={'words'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.nome}
            onChangeText={nome => this.handleChangeFor('nome', nome)}
            style={styles.inputs}
          />
          <TextInput
            placeholder="CPF"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.cpf}
            onChangeText={cpf => this.handleChangeFor('cpf', cpf)}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Data Nasc."
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.dataNasc}
            onChangeText={dataNasc =>
              this.handleChangeFor('dataNasc', dataNasc)
            }
            style={styles.inputs}
          />
          <TextInput
            placeholder="E-Mail"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.email}
            onChangeText={email => this.handleChangeFor('email', email)}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Celular"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.celular}
            onChangeText={celular => this.handleChangeFor('celular', celular)}
            style={styles.inputs}
            maxLength={11}
          />
          <TextInput
            placeholder="Telefone adicional"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.telefone}
            onChangeText={telefone =>
              this.handleChangeFor('telefone', telefone)
            }
            style={styles.inputs}
            maxLength={10}
          />
          <TextInput
            placeholder="Login"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.login}
            onChangeText={login => this.handleChangeFor('login', login)}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Senha"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={this.state.usuario.senha}
            onChangeText={senha => this.handleChangeFor('senha', senha)}
            style={styles.inputs}
          />
        </ScrollView>
        <View style={styles.opcoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={this.handleConfirmarContaClick()}>
            <Text style={styles.botaoText}>Confirmar</Text>
          </TouchableOpacity>
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
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },

  login: {
    justifyContent: 'flex-start',
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

  titulo: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  inputs: {
    height: 40,
    width: '95%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
  },

  botao: {
    width: 350,
    height: 40,
    backgroundColor: '#0f0f0f',
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
