import React from 'react';

class DashboardComponent extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.username}</h1>
      </div>
    );
  }
}

export default DashboardComponent;