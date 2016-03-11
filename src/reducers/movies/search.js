import { SEARCHING_MOVIES, SEARCH_MOVIES_SUCCESS, SEARCH_MOVIES_ERROR } from '../../actions/movies/search';
// import Immutable from 'immutable';
import update from 'react-addons-update';

/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  isFetching: false,
  query: ''
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
      const updates = {
                isFetching: true,
                query: action.query,
                searchResults: undefined
      }
      return update(state, {$merge: updates});

      // return Object.assign({}, state, updates);
    }
    case SEARCH_MOVIES_SUCCESS: {
      const updates = {
                isFetching: false,
                searchResults: action.searchResults
        }
      return update(state, {$merge: updates});

      // return Object.assign({}, state, updates);

    }
    case SEARCH_MOVIES_ERROR: {
      const updates = {
                isFetching: false,
                error: action.error
        };
      return update(state, {$merge: updates});

      // return Object.assign({}, state, updates);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
