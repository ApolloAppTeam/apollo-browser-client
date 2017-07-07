import React from 'react';

// test class to make sure react is working
class LoginComponent extends React.Component {

  constructor() {
    super();
    this.login = this.login.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    this.props.resetSignupToggle();
  }

  // render Home page
  render() {
    let buttonClass = this.props.signup ? 'login-button': 'login-button slide-up';
    let repeatClass = this.props.signup ? 'login-input show' : 'login-input hide';
    let repeatDisabled = !this.props.signup;
    let buttonValue = this.props.signup ? 'Sign Up' : 'Login';
    return (
        <div className='login-container'>
          <div className="login row">
            <div className="col-6 hero">
              <div className="hero-text">
                <h1>Your Music,</h1>
                <h1><span className="accent">wherever it plays</span></h1>
              </div>
            </div>
            <div className="col-6 login-controls">
              <form>
                  <input
                      className="login-input"
                      type="text"
                      id="login-username"
                      placeholder="Username"
                  />
                <input
                    className="login-input"
                    type="password"
                    id="login-password"
                    placeholder="Password"
                />
                <input
                    className={repeatClass}
                    disabled={repeatDisabled}
                    type="password"
                    id="login-password-repeat"
                    placeholder="Repeat Password"
                />
                <button
                  className={buttonClass}
                  type="button"
                  id="login-button"
                  onClick={this.login}
                >
                  {buttonValue}
                </button>
              </form>
            </div>
          </div>
          <div className="login-footer">
            <div className="row">
              <div className="col-4 foot"></div>
              <div className="col-4 foot"></div>
              <div className="col-4 foot"></div>
            </div>
          </div>
        </div>
    );
  }
  
  login() {
    let formData;
    if (this.props.signup) {
      formData = this.createRegisterAttempt();
    } else {
      formData = this.createLoginAttempt();
    }
    this.props.login();
  }
  
  createRegisterAttempt() {
    
  }
  
  createLoginAttempt() {
    
  }
}

export default LoginComponent;