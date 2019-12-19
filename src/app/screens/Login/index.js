import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as LoginActions} from '~/app/store/ducks/login';

import {Error, Loading} from '~/styles/generalComponents';

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

class Login extends Component {
  state = {
    usuarioDTO: {
      login: '',
      senha: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      usuarioDTO: {
        login: null,
        senha: null,
      },
    };
  }

  handleLoginClick = () => {
    const {usuarioDTO} = this.state;
    const {loginRequest} = this.props;

    loginRequest(usuarioDTO);
  };

  handleCriarContaClick = () => {
    this.props.navigation.navigate('CadastroUsuario');
  };

  handleUsuarioChange = login => {
    this.setState(state => {
      return {
        ...state,
        usuarioDTO: {
          ...state.usuarioDTO,
          login: login,
        },
      };
    });
  };

  handleSenhaChange = senha => {
    this.setState(state => {
      return {
        ...state,
        usuarioDTO: {
          ...state.usuarioDTO,
          senha: senha,
        },
      };
    });
  };

  componentWillUnmount() {
    const {loginReset} = this.props;
    loginReset();
  }

  render() {
    const {usuarioDTO} = this.state;
    const {loading, error} = this.props;
    return (
      <Container>
        <Menu>
          <Logo
            source={require('~/assets/iconeGarageando.png')}
            resizeMode="contain"
          />
          <Input
            placeholder="Usuário"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={usuarioDTO.login}
            onChangeText={login => this.handleUsuarioChange(login)}
          />
          <Input
            placeholder="Senha"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            secureTextEntry={true}
            value={usuarioDTO.senha}
            onChangeText={senha => this.handleSenhaChange(senha)}
          />
          {error && <Error>Usuário inexistente!</Error>}
          <Button onPress={() => this.handleLoginClick()}>
            {loading ? <Loading /> : <ButtonText>Login</ButtonText>}
          </Button>
          <SignUp onPress={() => this.handleCriarContaClick()}>
            <SignUpText>Criar conta</SignUpText>
          </SignUp>
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
