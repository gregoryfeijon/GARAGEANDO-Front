import {createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import ScreenLogin from '~/app/screens/Login';
import ScreenCadastroUsuario from '~/app/screens/Cadastros/CadastroUsuario';
import ScreenHome from '~/app/screens/Home';
import myHeader from '~/app/components/header';

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: ScreenLogin,
    },
    CadastroUsuario: {
      screen: ScreenCadastroUsuario,
    },
    Home: {
      screen: ScreenHome,
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
