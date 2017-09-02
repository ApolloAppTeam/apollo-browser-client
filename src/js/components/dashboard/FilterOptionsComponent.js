import React from 'react';
import Filter from './Filter.js';

import * as FilterActions from '../../redux/actions/filterActions.js';

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
        artistFilters.push(<Filter {...filter}/>);
      } else if (filter.type === 'city') {
        cityFilters.push(<Filter {...filter}/>);
      }
    });

    return (
      <div>
        <input type='text' />
        <select>
          <option default value='artist'>Artist</option>
          <option value='city'>City</option>
        </select>
        <input type='button' value='Add Filter' onClick={this.addFilter}/>

        <span>Artists:</span>
        {artistFilters}
        <span>Cities:</span>
        {cityFilters}
      </div>
    );
  }

  addFilter() {
    // Grab text from input field (find by id?)
    // Grab artist vs city filter
    // Dispatch filter action
  }

}

export default FilterOptionsComponent;