import React from 'react';
import SortOptionsComponent from './SortOptionsComponent.js';
import FilterOptionsComponent from './FilterOptionsComponent.js';

class OrderBarComponent extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    let dropdown = null;
    if (this.props.showSort) {
      dropdown = <SortOptionsComponent />;
    } else if (this.props.showFilter) {
      dropdown = <FilterOptionsComponent />;
    }

    return (
      <div>
        <input type='button' value='Sort' onClick={this.toggleSortDropdown} />
        <input type='button' value='Filter' onClick={this.toggleFilterDropdown} />

        {dropdown}
      </div>
    );
  }

  toggleSortDropdown() {

  }

  toggleFilterDropdown() {

  }

}

export default OrderBarComponent;