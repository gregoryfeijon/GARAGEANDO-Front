import {combineReducers} from 'redux';

import login from './login';
import cadastroUsuario from './cadastroUsuario';
import home from './home';

export default combineReducers({
  login,
  cadastroUsuario,
  home,
});
