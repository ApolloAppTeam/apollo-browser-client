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
    const show = this.props.show;

    return (
      <div className='show-wrapper' onClick={this.focus}>
        <p className='show-artist'>{show.artist}</p>
        <p className='show-city'>{show.city}</p>
        <p className='show-venue'>{show.venue}</p>
        <p className='show-date'>{show.date}</p>
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