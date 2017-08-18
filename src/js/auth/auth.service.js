const axios = require('axios');

const authUrl = 'http://127.0.0.1:3000';

const AUTH_URLS = {
  BASE: 'http://127.0.0.1:3000',
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
    url:`${authUrl}${url}`,
    data: params
  });
};

module.exports = {
  get,
  init,
  post,
  
  AUTH_URLS
};
