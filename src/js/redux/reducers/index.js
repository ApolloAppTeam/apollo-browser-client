import { combineReducers } from 'redux';

import session from './session';
import toggle from './toggle';
import view from './view';

export default combineReducers({
  session,
  toggle,
  view,
});