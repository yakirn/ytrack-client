import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../stores';
import App from '../containers/App';


import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

const store = configureStore();
const history = createHistory();

syncReduxAndRouter(history, store)
render(
<Provider store={store}>
	<App history={history} />
  </Provider>,
  document.getElementById('app')
);