import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './components/AppContainer';

import store from './redux/store';
const authService = require('./auth/auth.service');

import '../scss/app.scss';

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.querySelector('#app'), () => {
        authService.init();
      }
    );
};
window.addEventListener('load', init);
