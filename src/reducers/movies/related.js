import { FETCHING_RELATED, FETCHING_RELATED_MOVIES_SUCCESS, FETCHING_RELATED_MOVIES_ERROR } from '../../actions/movies/related';

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
      return Object.assign({}, state, {
                isFetching: true,
                traktID: action.traktID,
                relatedResults: undefined
      });
    } break;
    case FETCHING_RELATED_MOVIES_SUCCESS: {
      return Object.assign({}, state, {
                isFetching: false,
                relatedResults: action.relatedResults
        });

    }
    case FETCHING_RELATED_MOVIES_ERROR: {
      return Object.assign({}, state, {
                isFetching: false,
                error: action.error
        });
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
