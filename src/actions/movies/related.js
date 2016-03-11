import _ from 'lodash';
import RelatedSource from 'sources/RelatedSource';
import { routeActions } from 'react-router-redux'

export const FETCHING_RELATED = 'FETCHING_RELATED';
export const FETCHING_RELATED_MOVIES_SUCCESS = 'FETCHING_RELATED_MOVIES_SUCCESS';
export const FETCHING_RELATED_MOVIES_ERROR = 'FETCHING_RELATED_MOVIES_ERROR';

const TYPE_MOVIE = 'movie';

function fetchingRelatedMovies(traktID) {
  return { type: FETCHING_RELATED, traktID };
};

function fetchingRelatedMoviesSuccess(relatedResults) {
  return { type: FETCHING_RELATED_MOVIES_SUCCESS , relatedResults };
};

function fetchingRelatedMoviesError(error) {
  return { type: FETCHING_RELATED_MOVIES_ERROR, error };
};

function shouldFetchRelatedMovies(state, traktID){
	return state.isFetching !== true && !_.isUndefined(traktID);
}

export default function relatedMovies(traktID) {
	return (dispatch, getState) => {
		if (shouldFetchRelatedMovies(getState(), traktID)) {
			dispatch(fetchingRelatedMovies(traktID));
			return RelatedSource.related(traktID)
				.then(relatedResults => {
					dispatch(fetchingRelatedMoviesSuccess(relatedResults));
					dispatch(routeActions.push(`movies/${traktID}/related`))
				})
				.catch(error => {
					dispatch(fetchingRelatedMoviesError(error));
				});

		}
	};
}



