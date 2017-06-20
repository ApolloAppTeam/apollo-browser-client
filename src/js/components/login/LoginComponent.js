
import React from 'react';

// test class to make sure react is working
class LoginComponent extends React.Component {

  constructor() {
    super();
  }

  // render Home page
  render() {
    return (
        <div className="login-container">
          <h1>Hello, App</h1>
        </div>
    );
  }
}

export default LoginComponent;