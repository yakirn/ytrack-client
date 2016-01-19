'use strict';

import React from 'react';

require('styles//MovieItem.scss');

class MovieItemComponent extends React.Component {
  render() {
    let { ids, title, year } = this.props;
  	let relatedURL = '/related/' + ids.trakt;
    return (
        <li className="MovieItem">
            <div className="title">{title} ({year})</div>
            {ids.imdb ? <div className="imdb-link"><a href={'http://www.imdb.com/title/'+ids.imdb} target="_blank">IMDB</a></div> : '' }
            { /*<div className="related-movies"><Link to={relatedURL}>Show related movies</Link></div> */}
        </li>
      );
  }
}

MovieItemComponent.displayName = 'MovieItemComponent';

// Uncomment properties you need
// MovieItemComponent.propTypes = {};
// MovieItemComponent.defaultProps = {};

export default MovieItemComponent;
