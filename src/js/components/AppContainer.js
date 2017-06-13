
import React from 'react';

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
      <div className="app" onClick={this.testClick}>
        <h1>Hello, App</h1>
      </div>
        );
    }
}

export default AppContainer;