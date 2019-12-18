/**
 * Action Types
 */
export const Types = {
  REQUEST: 'CADASTRO_USUARIO_REQUEST',
  SUCCESS: 'CADASTRO_USUARIO_SUCCESS',
  FAILURE: 'CADASTRO_USUARIO_FAILURE',
  RESET: 'CADASTRO_USUARIO_RESET',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  usuario: null,
  loading: false,
  error: false,
  success: false,
};

export default function cadastrarUsuario(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return {...state, loading: true};
    case Types.SUCCESS:
      return {
        ...state,
        error: false,
        success: true,
        loading: false,
      };
    case Types.FAILURE:
      return {
        ...state,
        error: true,
        success: false,
        loading: false,
      };
    case Types.RESET:
      return {
        usuario: null,
        error: false,
        success: false,
        loading: false,
      };
    default:
      return state;
  }
}

/**
 * Action Creators
 */

export const Creators = {
  cadastroRequest: usuario => ({
    type: Types.REQUEST,
    payload: {usuario},
  }),

  cadastroSuccess: () => ({
    type: Types.SUCCESS,
  }),

  cadastroFailure: () => ({
    type: Types.FAILURE,
  }),

  cadastroReset: () => ({
    type: Types.RESET,
  }),
};
