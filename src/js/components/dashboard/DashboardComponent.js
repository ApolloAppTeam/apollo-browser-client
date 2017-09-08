import React from 'react';
import { connect } from 'react-redux';

import FinderComponent from './FinderComponent.js';
import OrderBarComponent from './OrderBarComponent.js';
import ShowsListComponent from './ShowsListComponent.js';
import MapComponent from './MapComponent.js';

import * as SortActions from '../../redux/actions/sortActions.js';
import * as FilterActions from '../../redux/actions/filterActions.js';

@connect((store) => {
  return {
    sortDropdown: store.view.sortDropdown,
    filterDropdown: store.view.filterDropdown,
    shows: store.view.shows,
    filters: store.view.filters,
  }
})
class DashboardComponent extends React.Component {

  constructor() {
    super();

    this.sortBy = this.sortBy.bind(this);
    this.addFilter = this.addFilter.bind(this);
    this.removeFilter = this.removeFilter.bind(this);
    this.toggleSortDropdown = this.toggleSortDropdown.bind(this);
    this.toggleFilterDropdown = this.toggleFilterDropdown.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className='dashboard'>
        <FinderComponent />
        <OrderBarComponent
          sortDropdown={this.props.sortDropdown}
          filterDropdown={this.props.filterDropdown}
          filters={this.props.filters}
          sortBy={this.sortBy}
          addFilter={this.addFilter}
          removeFilter={this.removeFilter}
          toggleSortDropdown={this.toggleSortDropdown}
          toggleFilterDropdown={this.toggleFilterDropdown}
        />
        <ShowsListComponent shows={this.props.shows} filters={this.props.filters}/>
        <MapComponent />
        <div className='footer'>DropYourJoust &copy;2017</div>
      </div>
    );
  }

  sortBy(sortType) {
    this.props.dispatch(SortActions.sortBy(sortType));
  }

  addFilter(filterType, filterText, filterID) {
    this.props.dispatch(FilterActions.addFilter(filterType, filterText, filterID));
  }

  removeFilter(id) {
    this.props.dispatch(FilterActions.removeFilter(id));
  }

  toggleSortDropdown() {
    this.props.dispatch(SortActions.toggleSortDropdown());
  }

  toggleFilterDropdown() {
    this.props.dispatch(FilterActions.toggleFilterDropdown());
  }


}

export default DashboardComponent;