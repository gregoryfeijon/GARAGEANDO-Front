import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import ScreenLogin from './app/screens/login';
import ScreenCadastroUsuario from './app/screens/cadastros/cadastroUsuario';

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: ScreenLogin,
    },
    CadastroUsuario: {
      screen: ScreenCadastroUsuario,
    },
  },

  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(stackNavigator);
