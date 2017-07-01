import React from 'react';

// test class to make sure react is working
class DashboardComponent extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

  // render Home page
  render() {
    return (
      <div>
        <h1>Hello, {this.props.username}</h1>
      </div>
    );
  }
}

export default DashboardComponent;