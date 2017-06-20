
import '../scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';

const init = () => {
  ReactDOM.render(
      <AppContainer />,
      document.querySelector('#app'), () => {
        // module initializations if needed
      }
    );
};
window.addEventListener('load', init);
