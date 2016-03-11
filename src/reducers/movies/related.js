import { FETCHING_RELATED, FETCHING_RELATED_MOVIES_SUCCESS, FETCHING_RELATED_MOVIES_ERROR } from '../../actions/movies/related';
import update from 'react-addons-update';

const initialState = {
  isFetching: false,
  traktID: undefined,
  relatedResults: undefined
};

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);

  switch(action.type) {
    
    case FETCHING_RELATED: {
      const updates = {
                isFetching: true,
                traktID: action.traktID,
                relatedResults: undefined
      };
      return update(state, {$merge: updates});
      // return Object.assign({}, state, updates);
    } break;
    case FETCHING_RELATED_MOVIES_SUCCESS: {
      const updates = {
                isFetching: false,
                relatedResults: action.relatedResults
      };
      return update(state, {$merge: updates});
      // return Object.assign({}, state, updates);

    }
    case FETCHING_RELATED_MOVIES_ERROR: {
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
