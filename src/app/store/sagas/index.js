import {all, takeLatest, call, put, select} from 'redux-saga/effects';

import api from '~/app/services/api';
import {navigate} from '~/app/services/navigation';

import {
  Creators as CadastroUsuarioActions,
  Types as CadastroUsuarioTypes,
} from '~/app/store/ducks/cadastroUsuario';

import {
  Creators as LoginActions,
  Types as LoginTypes,
} from '~/app/store/ducks/login';

import {
  Creators as HomeActions,
  Types as HomeTypes,
} from '~/app/store/ducks/home';

function* cadastrarUsuario(action) {
  try {
    const {usuario} = action.payload;

    yield call(api.post, 'api/usuario/registrar', usuario);

    yield put(CadastroUsuarioActions.cadastroSuccess());
  } catch (err) {
    yield put(CadastroUsuarioActions.cadastroFailure());
  }
}

function* login(action) {
  try {
    const {usuarioDTO} = action.payload;

    const token = yield call(api.post, 'autenticacao/obter-token', usuarioDTO);

    yield put(LoginActions.loginSuccess(usuarioDTO.login, token.data));

    navigate('Home');
  } catch (err) {
    yield put(LoginActions.loginFailure());
  }
}

function* carregaUsuario() {
  try {
    const {usuarioDTO, token} = yield select(state => state.login);
    const headerParams = {
      Authorization: `Bearer ${token}`,
    };

    // const response = yield call(
    //   api.post,
    //   'api/usuario/login',
    //   usuarioDTO,
    //   {
    //     headers: headerParams,
    //   },
    // );

    const response = yield call(
      api.post,
      'api/usuario/loginTeste',
      usuarioDTO,
      {
        headers: headerParams,
      },
    );
    yield put(HomeActions.carregaUsuarioSuccess(response.data));
  } catch (err) {
    yield put(HomeActions.carregaUsuarioFailure());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(CadastroUsuarioTypes.REQUEST, cadastrarUsuario),
    takeLatest(LoginTypes.REQUEST, login),
    takeLatest(HomeTypes.REQUEST, carregaUsuario),
  ]);
}
