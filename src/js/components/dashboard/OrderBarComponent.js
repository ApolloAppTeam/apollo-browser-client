import React from 'react';
import SortOptionsComponent from './SortOptionsComponent.js';
import FilterOptionsComponent from './FilterOptionsComponent.js';

class OrderBarComponent extends React.Component {

  constructor() {
    super();

    this.toggleSortDropdown = this.toggleSortDropdown.bind(this);
    this.toggleFilterDropdown = this.toggleFilterDropdown.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    let dropdown = null;
    if (this.props.sortDropdown) {
      dropdown = <SortOptionsComponent sortBy={this.props.sortBy} />;
    } else if (this.props.filterDropdown) {
      dropdown = <FilterOptionsComponent
                    filters={this.props.filters}
                    addFilter={this.props.addFilter}
                    removeFilter={this.props.removeFilter}
                  />;
    }

    return (
      <div className='sort-filter-bar'>
        <input type='button' className='reveal-button' value='Sort' onClick={this.toggleSortDropdown} />
        <input type='button' className='reveal-button' value='Filter' onClick={this.toggleFilterDropdown} />

        {dropdown}
      </div>
    );
  }

  toggleSortDropdown() {
    this.props.toggleSortDropdown();
  }

  toggleFilterDropdown() {
    this.props.toggleFilterDropdown();
  }

}

export default OrderBarComponent;