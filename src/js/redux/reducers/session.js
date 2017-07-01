const initial = {
  loggedIn: false,
  username: ''
};

export default function reduce(state=initial, action) {
  switch (action.type) {
    case 'SESSION_LOGIN':
      return {
        ...state,
        loggedIn: true,
        username: action.payload.username
      };

    case 'SESSION_LOGOUT':
      return {
        ...initial
      };
  }

  return state;
}
