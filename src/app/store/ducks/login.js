/**
 * Action Types
 */
export const Types = {
  REQUEST: 'LOGIN_REQUEST',
  SUCCESS: 'LOGIN_SUCCESS',
  FAILURE: 'LOGIN_FAILURE',
  RESET: 'LOGIN_RESET',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  usuarioDTO: null,
  loading: false,
  error: false,
  token: null,
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
        token: action.payload.token,
      };
    case Types.FAILURE:
      return {...state, loading: false, error: true};
    case Types.RESET:
      return {...state, loading: false, error: false};
    default:
      return state;
  }
}

/**
 * Action Creators
 */
export const Creators = {
  loginRequest: usuarioDTO => ({
    type: Types.REQUEST,
    payload: {usuarioDTO},
  }),

  loginSuccess: token => ({
    type: Types.SUCCESS,
    payload: {token},
  }),

  loginFailure: () => ({
    type: Types.FAILURE,
  }),

  loginReset: () => ({
    type: Types.RESET,
  })
};
