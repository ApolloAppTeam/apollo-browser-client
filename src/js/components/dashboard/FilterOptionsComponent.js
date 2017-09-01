import React from 'react';
import Filter from './Filter.js';

class FilterOptionsComponent extends React.Component {

  constructor() {
    super();
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
        artistFilters.push(<Filter text={filter.text}/>);
      } else if (filter.type === 'city') {
        cityFilters.push(<Filter text={filter.text}/>);
      }
    });

    return (
      <div>
        <input type='text' />
        <input type='select'>
          <option>Artist</option>
          <option>City</option>
        </input>
        <input type='button' value='Add Filter' onClick={this.addFilter}/>

        <span>Artists:</span>
        {artistFilters}
        <span>Cities:</span>
        {cityFilters}
      </div>
    );
  }

  addFilter() {

  }

}

export default FilterOptionsComponent;