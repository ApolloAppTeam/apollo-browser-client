import React from 'react';

class ShowComponent extends React.Component {

  constructor() {
    super();

    this.focus = this.focus.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='show-wrapper' onClick={this.focus}>
        <div className='show-wrapper-column'>
          <p className='show-artist'>{this.props.artist}</p>
          <p className='show-city'>{this.props.city}</p>
        </div>
        <div className='show-wrapper-column'>
          <p className='show-venue'>{this.props.venue}</p>
          <p className='show-date'>{this.props.date}</p>
        </div>
      </div>
    );
  }

  /**
   * Calls passed-in function to focus map component on this show's location
   */
  focus() {
    // this.props.focusShow(this.props.show.location);
  }

}

export default ShowComponent;