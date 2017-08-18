import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    loggedIn: store.session.loggedIn
  }
})
class NavComponent extends React.Component {

  constructor() {
    super();
  }

  // render Home page
  render() {
    const navLink = this.props.loggedIn ? 'Logout' : this.props.signup ? 'Log In' : 'Register';
    const clickEvent = this.props.loggedIn ? this.props.logout : this.props.register;
    return (
        <div className="nav-container">
          <nav className="row">
            <div className="logo col-2"><span className="logo-text"> | Apollo</span></div>
            <div className="col-8"></div>
            <a
              className="register-button col-2"
              href="#"
              onClick={clickEvent}
            >
              {navLink}
            </a>
          </nav>
        </div>
    );
  }
}

export default NavComponent;