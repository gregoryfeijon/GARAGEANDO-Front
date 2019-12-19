import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '~/app/services/api';
import {navigate} from '~/app/services/navigation';
// import AsyncStorage from '@react-native-community/async-storage';

import {
  Creators as CadastroUsuarioActions,
  Types as CadastroUsuarioTypes,
} from '~/app/store/ducks/cadastroUsuario';

import {
  Creators as LoginActions,
  Types as LoginTypes,
} from '~/app/store/ducks/login';

function* cadastrarUsuario(action) {
  try {
    const {usuario} = action.payload;

    yield call(api.post, 'api/usuario/registrar', usuario);

    // AsyncStorage.setItem(`@Usuario:${usuario.login}`, token);

    yield put(CadastroUsuarioActions.cadastroSuccess());
  } catch (err) {
    yield put(CadastroUsuarioActions.cadastroFailure());
  }
}

function* login(action) {
  try {
    const {usuarioDTO} = action.payload;

    const token = yield call(api.post, 'autenticacao/obter-token', usuarioDTO);

    yield put(LoginActions.loginSuccess(token));

    navigate('Home');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(CadastroUsuarioTypes.REQUEST, cadastrarUsuario),
    takeLatest(LoginTypes.REQUEST, login),
  ]);
}
