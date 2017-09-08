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

    switch (this.props.sort) {
    // Alphabetical
    case 0:
      viewableShows.sort((show1, show2) => {
        if (show1.artist < show2.artist) {
          return -1;
        } else if (show1.artist > show2.artist) {
          return 1;
        }
        return 0;
      });
      break;
    // Distance
    case 1:
      viewableShows.sort((show1, show2) => {
        if (show1.artist < show2.artist) {
          return 1;
        } else if (show1.artist > show2.artist) {
          return -1;
        }
        return 0;
      });  // TODO: Still unimplemented!
      break;
    // Date
    case 2:
      viewableShows.sort((show1, show2) => {
        if (show1.artist < show2.artist) {
          return -1;
        } else if (show1.artist > show2.artist) {
          return 1;
        }
        return 0;
      });
      // Needs dates to be implimented as Date objects first
      // viewableShows.sort((show1, show2) => {
      //   // Compare dates
      // });
      break;
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