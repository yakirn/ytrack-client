import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import DevTools from '../containers/DevTools';

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware, // neat middleware that logs actions
    ),
    DevTools.instrument(),
  )(createStore)


module.exports = function(initialState) {
  const store = createStoreWithMiddleware(reducers, initialState)
	
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
