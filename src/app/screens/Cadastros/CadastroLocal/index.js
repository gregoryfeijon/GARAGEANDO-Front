import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {Creators as CadastroLocalActions} from '~/app/store/ducks/cadastroLocal';

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

class CadastroLocal extends Component {
  state = {
    local: {
      largura: null,
      altura: null,
      precoMedioHora: null,
      numero: null,
      complemento: null,
      endereco: {
        cidade: null,
        bairro: null,
        rua: null,
        cep: null,
        latitude: null,
        longitude: null,
        estado: null,
      },
    },
  };

  handleChangeFor = (propertyName, propertyValue, isPessoa) => {
    if (isEndereco) {
      this.setState(state => {
        return {
          ...state,
          usuario: {
            ...state.local,
            endereco: {
              ...state.local.endereco,
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
            ...state.local,
            [propertyName]: propertyValue,
          },
        };
      });
    }
  };

  handleConfirmarContaClick = () => {
    // const {local} = this.state;
    // const {cadastroLocalRequest} = this.props;
    // cadastroLocalRequest(local);
  };

  // componentWillUnmount() {
  //   const {cadastroLocalReset} = this.props;
  //   cadastroLocalReset();
  // }

  render() {
    const {local} = this.state;
    // const {loading, error, success} = this.props;
    return (
      <Container>
        <Titulo>CADASTRO DE LOCAL</Titulo>
        {/* {error && <Error>Local não cadastrado!</Error>}
        {success && <Success>Local cadastrado com sucesso!</Success>} */}
        <Menu>
          <Input
            placeholder="Rua"
            autoCapitalize={'words'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.endereco.rua}
            onChangeText={rua => this.handleChangeFor('rua', rua, true)}
          />
          <Input
            placeholder="Bairro"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.endereco.celular}
            onChangeText={bairro =>
              this.handleChangeFor('bairro', bairro, true)
            }
          />
          <Input
            placeholder="Cidade"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.endereco.cidade}
            onChangeText={cidade =>
              this.handleChangeFor('cidade', cidade, true)
            }
          />
          <Input
            placeholder="Estado"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.endereco.email}
            onChangeText={estado =>
              this.handleChangeFor('estado', estado, true)
            }
          />
          <Input
            placeholder="CEP"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.endereco.telefone}
            onChangeText={cep => this.handleChangeFor('cep', cep, true)}
          />
          <Input
            placeholder="Número"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.numero}
            onChangeText={numero =>
              this.handleChangeFor('numero', numero, false)
            }
          />
          <Input
            placeholder="Complemento"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.complemento}
            onChangeText={complemento =>
              this.handleChangeFor('complemento', complemento, false)
            }
          />
          <Input
            placeholder="Preco Médio/Hora"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.precoMedioHora}
            onChangeText={precoMedioHora =>
              this.handleChangeFor('precoMedioHora', precoMedioHora, false)
            }
          />
          <Input
            placeholder="Largura"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.largura}
            onChangeText={largura =>
              this.handleChangeFor('largura', largura, false)
            }
          />
          <Input
            placeholder="Altura"
            autoCapitalize={'none'}
            returnKeyType={'done'}
            autoCorrect={false}
            value={local.altura}
            onChangeText={altura =>
              this.handleChangeFor('altura', altura, false)
            }
          />
        </Menu>
        <Opcoes>
          <Button onPress={() => this.handleConfirmarContaClick()}>
            {/* {loading ? <Loading /> : <ButtonText>Confirmar</ButtonText>} */}
            <ButtonText>Confirmar</ButtonText>
          </Button>
        </Opcoes>
      </Container>
    );
  }
}

// const mapStateToProps = state => ({
//   loading: state.cadastroUsuario.loading,
//   error: state.cadastroUsuario.error,
//   success: state.cadastroUsuario.success,
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(CadastroUsuarioActions, dispatch);

// CadastroLocal.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   error: PropTypes.bool.isRequired,
//   success: PropTypes.bool.isRequired,
// };

export default connect()(CadastroLocal);
