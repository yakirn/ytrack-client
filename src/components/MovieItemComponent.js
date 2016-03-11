'use strict';

import React from 'react';
import MovieActions from './MovieActionsComponent'

require('styles//MovieItem.scss');

const MovieItemComponent = (props) => {
    let { ids, title, year, overview, images } = props;
    return (
        <li className="movie-item">
            {(images && images.poster) ? <img className="movie-item--thumb" src={images.poster.thumb} alt={title} /> : ''}
            <div className="movie-item--title">{title} ({year})</div>
            <div className="movie-item--overview">{overview}</div>
            <MovieActions {...ids} showRelated={props.showRelated} />
        </li>
      );
  }

MovieItemComponent.displayName = 'MovieItemComponent';

// Uncomment properties you need
// MovieItemComponent.propTypes = {};
// MovieItemComponent.defaultProps = {};

export default MovieItemComponent;
