import {all, takeLatest, call, put} from 'redux-saga/effects';

import api from '~/app/services/api';

let response;

import {
  Creators as CadastroUsuarioActions,
  Types as CadastroUsuarioTypes,
} from '~/app/store/ducks/cadastroUsuario';

function* cadastrarUsuario(action) {
  try {
    const {usuario} = action.payload;
    yield call(api.post, 'api/usuario/registrar', usuario);
    yield put(CadastroUsuarioActions.cadastroSuccess());
  } catch (err) {
    yield put(CadastroUsuarioActions.cadastroFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(CadastroUsuarioTypes.REQUEST, cadastrarUsuario)]);
}
