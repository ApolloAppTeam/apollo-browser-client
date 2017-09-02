import React from 'react';

class FilterComponent extends React.Component {

  constructor() {
    super();

    this.removeFilter = this.removeFilter.bind(this);
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
        <input type='button' value='X' onClick={this.removeFilter}/>
      </div>
    );
  }

  removeFilter() {
    this.props.remove(this.props.type, this.props.text);
  }

}

export default FilterComponent;