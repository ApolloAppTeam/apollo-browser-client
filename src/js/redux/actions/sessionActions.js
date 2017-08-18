const authService = require('../../auth/auth.service.js');
const axios = require('axios');

export const login = (url, userdata) => {
  return (dispatch) => {
    // Could dispatch some action here to affect UI, e.g. putting up a spinner

    axios.post(`${authService.AUTH_URLS.BASE}${url}`, userdata)
      .then((response) => {
        dispatch({type: 'SESSION_LOGIN', payload: {username: response.user}});
      })
      .catch((error) => {
        dispatch({type: 'SESSION_LOGIN_ERROR', payload: {error: error.response.data.error}});
      });
  };
};

export const logout = () => {
  return {
    type: 'SESSION_LOGOUT',
    payload: null
  };
};