/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
const initialState = {
  isFetching: false,
  query: '',
  items: []
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
    case 'SEARCH_MOVIES': {
      console.log(action.query);
      return {
                isFetching: true,
                query: action.query,
                items: []
            };
      break;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
