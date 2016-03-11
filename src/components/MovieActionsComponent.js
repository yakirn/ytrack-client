'use strict';

import React from 'react';
import { Link } from 'react-router';

require('styles//MovieActions.scss');

class MovieActionsComponent extends React.Component {
	constructor(props){
	    super(props);
	    this.handleRelated = this.handleRelated.bind(this);
  	}
  	handleRelated(e) {
      e.preventDefault();
      this.props.showRelated(this.props.trakt);
  	}
	render() {
		const {imdb, trakt} = this.props;
	  	const imdbURL = `http://www.imdb.com/title/${imdb}`;
	  	const relatedURL = `/related/${trakt}`;
	    return (
	      <div className="movieactions">
	        {imdb ? <a className="movieactions--imdb-link" href={imdbURL} target="_blank">IMDB</a> : '' }
	        { /* <Link className="movieactions--related" to={relatedURL}>Show related movies</Link> */}
	        <a className="movieactions--related" href="#" onClick={this.handleRelated}>Show related movies</a>
	      </div>
	    );
	  }
}

MovieActionsComponent.displayName = 'MovieActionsComponent';

// Uncomment properties you need
// MovieActionsComponent.propTypes = {};
// MovieActionsComponent.defaultProps = {};

export default MovieActionsComponent;
