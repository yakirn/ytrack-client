import SearchSource from 'sources/SearchSource';
import _ from 'lodash';

export const SEARCHING_MOVIES = 'SEARCHING_MOVIES';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';

const TYPE_MOVIE = 'movie';

function searchingMovies(query) {
  return { type: SEARCHING_MOVIES, query };
};

function searchMoviesSuccess(searchResults) {
  return { type: SEARCH_MOVIES_SUCCESS , searchResults };
};

function searchMoviesError(error) {
  return { type: SEARCH_MOVIES_ERROR, error };
};

function shouldSearchMovies(state, query){
	return state.isFetching !== true && !_.isEmpty(query);
}

export default function searchMovies(query, year) {
	return (dispatch, getState) => {
		if (shouldSearchMovies(getState(), query)) {
			dispatch(searchingMovies(query));
			return SearchSource.search({query, type: TYPE_MOVIE, year})
				.then(searchResults => {
					dispatch(searchMoviesSuccess(searchResults));
				})
				.catch(error => {
					dispatch(searchMoviesError(error));
				});

		}
	};
}


