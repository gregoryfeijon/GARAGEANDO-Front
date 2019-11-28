import {createStackNavigator, createAppContainer} from 'react-navigation';

import ScreenLogin from './app/screens/login';

const stackNavigator = createStackNavigator(
  {
    Login: {
      screen: ScreenLogin,
    },
  },

  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(stackNavigator);
