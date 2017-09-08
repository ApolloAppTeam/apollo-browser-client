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

    let viewableShows = this.props.shows;
    if (this.props.filters && this.props.filters.length > 0) {
      viewableShows = viewableShows.filter((show) => {
        let passesFilter = false;
        this.props.filters.forEach((filter) => {
          if ((filter.type === 'artist' && filter.text === show.artist)
              || (filter.type === 'city' && filter.text === show.city)) {
            passesFilter = true;
          }
        });
        return passesFilter;
      });
    }

    const shows = viewableShows.map((show) => {
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