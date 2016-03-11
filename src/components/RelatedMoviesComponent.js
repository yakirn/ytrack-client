'use strict';

import React from 'react';
import MovieItem from './MovieItemComponent';

require('styles//RelatedMovies.scss');

const RelatedMoviesComponent = (props) => {
	return (
	  <div className="relatedmovies-component">
	    {
	    	props.related.map((relatedMovie) => { return <MovieItem {...relatedMovie} showRelated={props.showRelated} key={relatedMovie.ids.trakt} />; })
	    }
	  </div>
	);
}

RelatedMoviesComponent.displayName = 'RelatedMoviesComponent';

// Uncomment properties you need
// RelatedMoviesComponent.propTypes = {};
// RelatedMoviesComponent.defaultProps = {};

export default RelatedMoviesComponent;
