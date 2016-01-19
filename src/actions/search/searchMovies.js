import SearchSource from 'sources/SearchSource';

export const SEARCHING_MOVIES = 'SEARCHING_MOVIES';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';

function searchingMovies() {
  return { type: SEARCHING_MOVIES };
};

function searchMoviesSuccess(searchResults) {
  return { type: SEARCH_MOVIES_SUCCESS , searchResults };
};

function searchMoviesError(error) {
  return { type: SEARCH_MOVIES_ERROR, error };
};

export function searchMovies(query) {
	return (dispatch) => {
		dispatch(searchingMovies);

		return SearchSource.search({query})
				.then(searchResults => {
					dispatch(searchMoviesSuccess(searchResults));
				})
				.catch(error => {
					dispatch(searchMoviesError(error));
				});
	};
}


