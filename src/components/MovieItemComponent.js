'use strict';

import React from 'react';

require('styles//MovieItem.scss');

const MovieItemComponent = (props) => {
    let { ids, title, year, images } = props;
  	let relatedURL = '/related/' + ids.trakt;
    return (
        <li className="movie-item">
            {(images && images.poster) ? <img className="movie-item--thumb" src={images.poster.thumb} alt={title} /> : ''}
            <div className="movie-item--title">{title} ({year})</div>
            {ids.imdb ? <a className="movie-item--imdb-link" href={'http://www.imdb.com/title/'+ids.imdb} target="_blank">IMDB</a> : '' }
            { /*<div className="related-movies"><Link to={relatedURL}>Show related movies</Link></div> */}
        </li>
      );
  }

MovieItemComponent.displayName = 'MovieItemComponent';

// Uncomment properties you need
// MovieItemComponent.propTypes = {};
// MovieItemComponent.defaultProps = {};

export default MovieItemComponent;
