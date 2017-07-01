import { combineReducers } from 'redux';

import session from './session';
import toggle from './toggle';

export default combineReducers({
  session,
  toggle,
});