const axios = require('axios');

const authUrl = '127.0.0.1:3000/';

const AUTH_URLS = {
  SIGNUP: '/signup',
  SIGNIN: '/signin'
};

const init = () => {
  
};

const get = () => {
  
};

const post = (url, params) => {
  return axios({
    method:'post',
    url:`http://127.0.0.1:3000${url}`
  });
};

module.exports = {
  get,
  init,
  post,
  
  AUTH_URLS
};
