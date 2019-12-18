import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as CadastroUsuarioActions} from '~/app/store/ducks/cadastroUsuario';

import {
  Container,
  Titulo,
  Button,
  ButtonText,
  Input,
  Opcoes,
  Menu,
  Loading,
  Error,
  Success,
} from './styles';

class CadastroUsuario extends Component {
  state = {
    usuario: {
      pessoa: {
        nome: '',
        cpf: '',
        email: '',
        celular: '',
        telefone: '',
        pessoaTipo: '',
      },
      login: '',
      senha: '',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      usuario: {
        pessoa: {
          nome: null,
          cpf: null,
          email: null,
          celular: null,
          telefone: null,
          pessoaTipo: 'FISICA',
        },
        login: null,
        senha: null,
      },
    };
  }

  handleChangeFor = (propertyName, propertyValue, isPessoa) => {
    if (isPessoa) {
      this.setState(state => {
        return {
          ...state,
          usuario: {
            ...state.usuario,
            pessoa: {
              ...state.usuario.pessoa,
              [propertyName]: propertyValue,
            },
          },
        };
      });
    } else {
      this.setState(state => {
        return {
          ...state,
          usuario: {
            ...state.usuario,
            [propertyName]: propertyValue,
          },
        };
      });
    }
  };

  handleConfirmarContaClick = () => {
    // const response = await api.post(
    //   'api/usuario/registrar',
    //   this.state.usuario,
    // );
    // console.tron.log(response);
    const {usuario} = this.state;
    const {cadastroRequest} = this.props;

    cadastroRequest(usuario);
  };

  componentWillUnmount() {
    const {cadastroReset} = this.props;
    cadastroReset();
  }

  render() {
    const {usuario} = this.state;
    const {loading, error, success} = this.props;
    return (
      <Container>
        <Titulo>CADASTRO DE USUÁRIO</Titulo>
        {error && <Error>Usuário não cadastrado!</Error>}
        {success && <Success>Usuário cadastrado com sucesso!</Success>}
        <Menu>
          <Input
            placeholder="Nome"
            autoCapitalize={'words'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={usuario.pessoa.nome}
            onChangeText={nome => this.handleChangeFor('nome', nome, true)}
          />
          <Input
            placeholder="CPF"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'number-pad'}
            autoCorrect={false}
            value={usuario.pessoa.cpf}
            onChangeText={cpf => this.handleChangeFor('cpf', cpf, true)}
          />
          <Input
            placeholder="E-Mail"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'email-address'}
            autoCorrect={false}
            value={usuario.pessoa.email}
            onChangeText={email => this.handleChangeFor('email', email, true)}
          />
          <Input
            placeholder="Celular"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'number-pad'}
            autoCorrect={false}
            value={usuario.pessoa.celular}
            onChangeText={celular =>
              this.handleChangeFor('celular', celular, true)
            }
            maxLength={11}
          />
          <Input
            placeholder="Telefone adicional"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            keyboardType={'number-pad'}
            autoCorrect={false}
            value={usuario.pessoa.telefone}
            onChangeText={telefone =>
              this.handleChangeFor('telefone', telefone, true)
            }
            maxLength={10}
          />
          <Input
            placeholder="Login"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={usuario.login}
            onChangeText={login => this.handleChangeFor('login', login, false)}
          />
          <Input
            placeholder="Senha"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            secureTextEntry={true}
            value={usuario.senha}
            onChangeText={senha => this.handleChangeFor('senha', senha, false)}
          />
        </Menu>
        <Opcoes>
          <Button onPress={() => this.handleConfirmarContaClick()}>
            {loading ? <Loading /> : <ButtonText>Confirmar</ButtonText>}
          </Button>
        </Opcoes>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.cadastroUsuario.loading,
  error: state.cadastroUsuario.error,
  success: state.cadastroUsuario.success,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CadastroUsuarioActions, dispatch);

CadastroUsuario.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CadastroUsuario);
