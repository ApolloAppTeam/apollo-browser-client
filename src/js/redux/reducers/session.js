const initial = {
  loggedIn: false,
  username: '',
  loginError: null
};

export default function reduce(state=initial, action) {
  switch (action.type) {
  case 'SESSION_LOGIN':
    return {
      ...state,
      loggedIn: true,
      username: action.payload.username,
      loginError: null
    };

  case 'SESSION_LOGIN_ERROR':
    return {
      ...state,
      loginError: action.payload.error
    };

  case 'SESSION_LOGOUT':
    return {
      ...state
    };
  }

  return state;
}
