import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
} from 'react-native';

import colors from '~/styles/colors';
import {black} from 'ansi-colors';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default class CadastroUsuario extends Component {
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

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>CADASTRO DE USUÁRIO</Text>
        <ScrollView style={styles.menu}>
          <TextInput
            placeholder="Nome"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="CPF"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Data Nasc."
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="E-Mail"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Celular"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Telefone adicional"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Login"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Senha"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            style={styles.inputs}
          />
        </ScrollView>
        <View style={styles.opcoes}>
          <Button color={black} title={'Confirmar'} style={styles.text} />
          <Button color={black} title={'Cancelar'} style={styles.text} />
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
});
