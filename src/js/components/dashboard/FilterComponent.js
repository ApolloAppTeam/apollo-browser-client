import React from 'react';

class FilterComponent extends React.Component {

  constructor() {
    super();

    this.remove = this.remove.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
    
  }

  // render Home page
  render() {

    return (
      <div>
        <p>{this.props.text}</p>
        <input type='button'
          className='remove-filter-button'
          value='X'
          onClick={this.remove}
        />
      </div>
    );
  }

  remove() {
    this.props.removeFilter(this.props.id);
  }

}

export default FilterComponent;