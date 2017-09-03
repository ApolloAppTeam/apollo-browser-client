import React from 'react';

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
      return <ShowComponent {...show} />;
    });

    // if shows == null, display image thing

    return (
      <div>
        <p className='shows-list-header'>Artists you are watching:</p>
        {shows}
      </div>
    );
  }

}

export default ShowsListComponent;