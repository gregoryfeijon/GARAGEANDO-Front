import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import ScreenLogin from './app/screens/login';
import ScreenCadastroUsuario from './app/screens/cadastros/cadastroUsuario';
import myHeader from './app/components/header';

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
    defaultNavigationOptions: ({navigation}) => {
      return myHeader(navigation);
    },
  },
);

export default createAppContainer(stackNavigator);
