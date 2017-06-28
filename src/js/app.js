import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './components/AppContainer';
import store from './redux/store';

import '../scss/app.scss';

const init = () => {
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      document.querySelector('#app'), () => {
        // module initializations if needed
      }
    );
};
window.addEventListener('load', init);
