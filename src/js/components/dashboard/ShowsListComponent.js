import React from 'react';

import ShowComponent from './ShowComponent.js';

class ShowsListComponent extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

  render() {

    const shows = this.props.shows.map((show) => {
      return <ShowComponent {...show} key={`${show.artist}${show.venue}`} />;
    });

    // if shows == null, display image thing

    return (
      <div>
        <div className='shows-list-header'>Artists you are watching:</div>
        {shows}
      </div>
    );
  }

}

export default ShowsListComponent;