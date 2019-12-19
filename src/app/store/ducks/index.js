import {combineReducers} from 'redux';

import login from './login';
import cadastroUsuario from './cadastroUsuario';

export default combineReducers({
  login,
  cadastroUsuario,
});
