import React from 'react';

class FinderComponent extends React.Component {

  constructor() {
    super();

    this.showArtistFinder = this.showArtistFinder.bind(this);
  }

  componentWillMount() {

  }

  componentWillUnmount() {
  }

  render() {

    let searchButton = this.props.showArtist ? <input type='button' value='Search' onClick={this.props.someFunction}/> : null;
    let watchButton = this.props.showArtist ? <input type='button' value='Watch' onClick={this.props.someFunction}/> : null;
    let addCityButton = !(this.props.showArtist) ? <input type='button' value='Add City' onClick={this.props.someFunction}/> : null;

    return (
      <div className='finder-wrapper'>
        <input type='button' value='Artists' onClick={this.showArtistFinder} />
        <input type='button' value='Cities' />
        
        <input type='text' default={this.props.defaultText} />
        {searchButton}
        {watchButton}
        {addCityButton}
      </div>
    );
  }

  showArtistFinder() {
    // Should probably actually come from props, dispatch an action to redux telling it to show the artist finder
  }
}

export default FinderComponent;