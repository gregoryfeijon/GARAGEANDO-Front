import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Creators as HomeActions} from '~/app/store/ducks/home';

import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';

import {Container, Logo, TextTeste, SubHeader} from './styles';

class Home extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  componentDidMount() {
    const {carregaUsuarioRequest} = this.props;
    carregaUsuarioRequest();
  }

  navigateToCriaLocal = () => {
    this.hideMenu();
    this.props.navigation.navigate('CadastroLocal');
  };

  navigateToLocaisFavoritos = () => {
    this.hideMenu();
    this.props.navigation.navigate('LocaisFavoritos');
  };

  navigateToLocaisProprios = () => {
    this.hideMenu();
    this.props.navigation.navigate('LocaisProprios');
  };

  render() {
    const {usuario} = this.props;
    console.tron.log(usuario);
    return (
      <Container>
        <SubHeader>
          <Logo source={require('~/assets/home.png')} resizeMode="contain" />
          {usuario != null && <TextTeste>{usuario.pessoa.nome}</TextTeste>}
        </SubHeader>
        <Menu
          ref={this.setMenuRef}
          button={<TextTeste onPress={this.showMenu}>Show menu</TextTeste>}>
          <MenuItem onPress={() => this.navigateToCriaLocal()}>
            Criar Local
          </MenuItem>
          <MenuDivider />
          <MenuItem onPress={() => this.navigateToLocaisFavoritos()}>
            Locais Proprios
          </MenuItem>
          <MenuItem onPress={() => this.navigateToLocaisProprios()}>
            Locais Favoritos
          </MenuItem>
        </Menu>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  usuario: state.home.usuario.data,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(HomeActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
