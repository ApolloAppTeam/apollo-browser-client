import React from 'react';

import FinderComponent from './FinderComponent.js';
import OrderBarComponent from './OrderBarComponent.js';
import ShowsListComponent from './ShowsListComponent.js';
import MapComponent from './MapComponent.js';

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
        <FinderComponent />
        <OrderBarComponent />
        <ShowsListComponent />
        <MapComponent />
        <div id='footer'>DropYourJoust &copy;2017</div>
      </div>
    );
  }
}

export default DashboardComponent;