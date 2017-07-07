const axios = require('axios');

const authUrl = '127.0.0.1:8080/';

const init = () => {
  
};

const get = () => {
  
};

const post = (url, params) => {
  return axios.post(
    `${authUrl}${url}`, 
    {
      ...params
    });
};

module.exports = {
  get,
  init,
  post
};
