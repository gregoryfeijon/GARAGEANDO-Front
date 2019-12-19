import React from 'react';

import {Provider} from 'react-redux';

import '~/config/ReactotronConfig';
import '~/config/DevToolsConfig';

import store from '~/app/store';

import Routes from './routes';

import {setNavigator} from '~/app/services/navigation';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);
export default App;
