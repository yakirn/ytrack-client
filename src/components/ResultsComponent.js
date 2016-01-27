'use strict';

import React from 'react';
import MovieItem from './MovieItemComponent';
import Spinner from './SpinnerComponent';
import _ from 'lodash';

require('styles//Results.scss');

const ResultsComponent = (props) => {
  	const { searchResults, isFetching, query, error} = props;
  	if (isFetching)
  		return (
  			<div>
  					<div>Searching for movies with {query}</div>
  					<Spinner />
  			</div>
  			);
  	if (error)
  		return (
  				<div className="Results">
  					oops, an error occured - {error}
  				</div>
  				);
  	if(_.isEmpty(query) &&  !isFetching)
  		return (
  			<div className="Results">
  			Search for movies...
  			</div>
  			);
  	else if(searchResults && searchResults.length == 0 && isFetching && _.isEmpty(query)) 
  		return (
  			<div className="Results">
  			 <span>"No movies were found that matched #{query}"</span>
  			 </div>
  			);

    return (
      <div className="Results">
      		<span>Found {searchResults.length} movies!</span>
          <ul className="ResultsList">
		          { 
		            searchResults.map( result => {
		          		switch (result.type){
		          			case 'movie': {
								      return <MovieItem {...result.movie} key={result.movie.ids.trakt} />;
		                }
		          		}                            
		            })
		          }
	          </ul>
        </div>
    );
  }

ResultsComponent.displayName = 'ResultsComponent';

// Uncomment properties you need
// ResultsComponent.propTypes = {};
// ResultsComponent.defaultProps = {};

export default ResultsComponent;
