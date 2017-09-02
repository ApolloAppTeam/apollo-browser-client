import React from 'react';

import * as SortActions from '../../redux/actions/sortActions.js';

class SortOptionsComponent extends React.Component {

  constructor() {
    super();

    this.addSort = this.addSort.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  // render Home page
  render() {

    return (
      <div>
        <input type='button' value='A-Z' onClick={this.addSort)} />
        <input type='button' value='Distance' onClick={this.addSort)} />
        <input type='button' value='Date' onClick={this.addSort)} />
      </div>
    );
  }

  addSort(e) {
    // Grab id from e
    // Determine appropriate sort
    // Dispatch sort action
  }

}

export default SortOptionsComponent;