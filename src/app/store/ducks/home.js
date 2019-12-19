/**
 * Action Types
 */
export const Types = {
  REQUEST: 'CARREGA_USUARIO_REQUEST',
  SUCCESS: 'CARREGA_USUARIO_SUCCESS',
  FAILURE: 'CARREGA_USUARIO_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  usuario: null,
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        usuario: action.payload,
      };
    case Types.FAILURE:
      return {...state, loading: false, error: true};
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  carregaUsuarioRequest: () => ({
    type: Types.REQUEST,
  }),

  carregaUsuarioSuccess: usuario => ({
    type: Types.SUCCESS,
    payload: {usuario},
  }),

  carregaUsuarioFailure: () => ({
    type: Types.FAILURE,
  }),
};
