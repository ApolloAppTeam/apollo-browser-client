import React from 'react';
import FilterComponent from './FilterComponent.js';

class FilterOptionsComponent extends React.Component {

  constructor() {
    super();

    this.addFilter = this.addFilter.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    const artistFilters = [];
    const cityFilters = [];
    this.props.filters.forEach((filter) => {
      if (filter.type === 'artist') {
        artistFilters.push(<FilterComponent {...filter} removeFilter={this.props.removeFilter} />);
      } else if (filter.type === 'city') {
        cityFilters.push(<FilterComponent {...filter} removeFilter={this.props.removeFilter} />);
      }
    });

    return (
      <div>
        <input id='filter-text-input' type='text'/>
        <select id='filter-type-input'>
          <option default value='artist'>Artist</option>
          <option value='city'>City</option>
        </select>
        <input type='button' value='Add Filter' onClick={this.add}/>

        <span>Artists:</span>
        {artistFilters}
        <span>Cities:</span>
        {cityFilters}
      </div>
    );
  }

  add() {
    const filterType = document.getElementById('filter-type-input').value;
    const filterText = document.getElementById('filter-text-input').value;
    this.props.addFilter(filterType, filterText);
  }

}

export default FilterOptionsComponent;