
import React from 'react';

// test class to make sure react is working
class NavComponent extends React.Component {

  constructor() {
    super();
  }

  // render Home page
  render() {
    return (
        <div className="nav-container">
          <nav className="row">
            <div className="logo col-2"><span className="logo-text"> | Apollo</span></div>
            <div className="col-8"></div>
            <a className="register-button col-2" href="#">Register</a>
          </nav>
        </div>
    );
  }
}

export default NavComponent;