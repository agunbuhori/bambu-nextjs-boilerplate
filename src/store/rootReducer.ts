import { combineReducers } from 'redux';

import AuthReducer from './reducers/AuthReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
