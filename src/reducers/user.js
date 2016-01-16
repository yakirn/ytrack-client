const initialState = {
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
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
