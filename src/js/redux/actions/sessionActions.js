export function login(user) {
  return {
    type: 'SESSION_LOGIN',
    payload: {
      username: user
    }
  };
}

export function logout() {
  return {
    type: 'SESSION_LOGOUT',
    payload: null
  };
}