export const login = (user) => {
  return {
    type: 'SESSION_LOGIN',
    payload: {
      username: user
    }
  };
};

export const logout = () => {
  return {
    type: 'SESSION_LOGOUT',
    payload: null
  };
};