import React from 'react';
import { connect } from 'react-redux';

import DashboardComponent from './dashboard/DashboardComponent';
import LoginComponent from './login/LoginComponent';
import NavComponent from './NavComponent';

import * as SessionActions from '../redux/actions/sessionActions';
import * as ToggleActions from '../redux/actions/toggleActions';

// connect - decorator that slices off parts of the store
// and injects into the component as props
// whatever is returned from the first function becomes props
@connect((store) => {
  return {
    signup: store.toggle.signup,
    session: {
      loggedIn: store.session.loggedIn,
      username: store.session.username
    }
  }
})
class AppContainer extends React.Component {

  constructor() {
    super();
    this.attemptLogin = this.attemptLogin.bind(this);
    this.logout = this.logout.bind(this);
    this.register = this.register.bind(this);
    this.resetSignupToggle = this.resetSignupToggle.bind(this);
  }

  render() {
    const currentPageComponent = this.props.session.loggedIn ? (
        <DashboardComponent username={this.props.session.username} />
    ) : (
        <LoginComponent
            signup={this.props.signup}
            login={this.attemptLogin}
            resetSignupToggle={this.resetSignupToggle}
        />
    )
    return (
      <div className="app">
        <NavComponent
            signup={this.props.signup}
            register={this.register}
            logout={this.logout}
        />
        {currentPageComponent}
      </div>
    );
  }

  /**
   * handle click of register button. dispatches toggle action
   * to visually change state between login and sign up pages
   */
  register() {
    this.props.dispatch(ToggleActions.toggleSignup());
  }

  /**
   * submit login attempt
   */
  attemptLogin() {
    this.props.dispatch(SessionActions.login('user'));
  }

  /**
   * log out of the current session
   */
  logout() {
    this.props.dispatch(SessionActions.logout());
  }
  /**
   * reset toggle state when when component is destroyed
   */
  resetSignupToggle() {
    this.props.dispatch(ToggleActions.resetSignup());
  }

}

export default AppContainer;