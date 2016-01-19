import {SEARCHING_MOVIES, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR, searchMovies } from '../actions/search/searchMovies';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  isFetching: false,
  query: '',
  searchResults: []
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    /*
    case 'YOUR_ACTION': {
      // Modify next state depending on the action and return it
      return nextState;
    } break;
    */
    case SEARCHING_MOVIES: {
      return Object.assign({}, state, {
                isFetching: true,
        });
    }
    case SEARCH_MOVIES_SUCCESS: {
      return Object.assign({}, state, {
                isFetching: false,
                searchResults: action.searchResults
        });

    }
    case SEARCH_MOVIES_ERROR: {
      return Object.assign({}, state, {
            error: action.error
        });
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
