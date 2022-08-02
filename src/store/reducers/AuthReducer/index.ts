import type { ReduxAction } from '../ReduxAction';

type AuthState = {
  token: string | undefined;
};
const INITIAL_STATE = {
  token: '',
};

const AuthReducer = (
  state = INITIAL_STATE,
  action: ReduxAction<'LOGIN' | 'LOGOUT' | '', AuthState> = {
    type: '',
    payload: { token: '' },
  }
): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, token: action.payload?.token };
    case 'LOGOUT':
    default:
      return INITIAL_STATE;
  }
};

export default AuthReducer;
