import React from 'react';
import { connect } from 'react-redux';

import LoginComponent from './login/LoginComponent';
import NavComponent from './NavComponent';

import { toggleSignup } from '../redux/actions/toggleActions';

// connect - decorator that slices off parts of the store
// and injects into the component as props
// whatever is returned from the first function becomes props
@connect((store) => {
  return {
    signup: store.toggle.signup
  }
})
class AppContainer extends React.Component {

  constructor() {
    super();
    this.register = this.register.bind(this);
  }

  render() {
    return (
      <div className="app">
        <NavComponent signup={this.props.signup} register={this.register} />
        <LoginComponent signup={this.props.signup} />
      </div>
    );
  }

  /**
   * handle click of register button. dispatches toggle action
   * to visually change state between login and sign up pages
   */
  register() {
    this.props.dispatch(toggleSignup());
  }
}

export default AppContainer;