
import React from 'react';
import NavComponent from "./NavComponent";
import LoginComponent from "./login/LoginComponent";

// test class to make sure react is working
class AppContainer extends React.Component {

  constructor() {
    super();

    this.testClick = this.testClick.bind(this);
  }

  testClick() {
    console.log('test');
  }

  // render Home page
  render() {
    return (
      <div className="app">
        <NavComponent />
        <LoginComponent/>
      </div>
    );
  }
}

export default AppContainer;