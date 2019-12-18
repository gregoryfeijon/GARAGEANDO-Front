import React, {Component} from 'react';

import {
  Container,
  Button,
  ButtonText,
  Input,
  Logo,
  Menu,
  SignUp,
  SignUpText,
} from './styles';

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
      <Container>
        <Menu>
          <Logo
            source={require('~/assets/iconeGarageando.png')}
            resizeMode="contain"
          />
          <Input
            placeholder="Usuário"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Senha"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
          <Button onPress={() => this.handleLoginClick()}>
            <ButtonText>Login</ButtonText>
          </Button>
          <SignUp onPress={() => this.handleCriarContaClick()}>
            <SignUpText>Criar conta</SignUpText>
          </SignUp>
        </Menu>
      </Container>
    );
  }
}
