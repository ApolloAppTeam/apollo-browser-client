import React from 'react';

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
        <input type='button' id='alpha_sort' value='A-Z' onClick={this.addSort} />
        <input type='button' id='dist_sort' value='Distance' onClick={this.addSort} />
        <input type='button' id='date_sort' value='Date' onClick={this.addSort} />
      </div>
    );
  }

  addSort(e) {
    switch(e.target.id) {
      case 'alpha_sort':
        this.props.sortBy(0);
        break;
      case 'dist_sort':
        this.props.sortBy(1);
        break;
      case 'date_sort':
        this.props.sortBy(2);
        break;
    }
  }

}

export default SortOptionsComponent;