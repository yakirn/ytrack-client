'use strict';

import React from 'react';
import MovieItem from './MovieItemComponent';

require('styles//Results.scss');

class ResultsComponent extends React.Component {
  render() {
  	const searchResults = this.props.searchResults;
    return (
      <div className="Results">
          {searchResults.length}
          <ul className="ResultsList">
	          { 
	            searchResults.map( result => {
	          		switch (result.type){
	          			case 'movie': {
							      return <MovieItem key={result.movie.ids.trakt} 
	                                    title={result.movie.title}
	                                    year={result.movie.year}
	                                    ids={result.movie.ids}
	                                    />;
	                }
	          		}                            
	            })
	          }
          </ul>
        </div>
    );
  }
}

ResultsComponent.displayName = 'ResultsComponent';

// Uncomment properties you need
// ResultsComponent.propTypes = {};
// ResultsComponent.defaultProps = {};

export default ResultsComponent;
