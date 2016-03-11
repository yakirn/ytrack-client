// Do this once before any other code in your app
import "babel-polyfill";

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../stores';
// import App from '../containers/App';
import {Router, Route, IndexRoute } from 'react-router';
import Main from '../components/Main';
import SearchMovies from '../containers/SearchMovies';
// import RelatedMovies from '../components/RelatedMoviesComponent';
import RelatedMovies from '../containers/RelatedMovies';
import { browserHistory } from 'react-router'

const store = configureStore();

render(
<Provider store={store}>
	<Router history={browserHistory}>
          <Route path='/' component={Main}>
            <IndexRoute component={SearchMovies}/>
            <Route path='movies/:id/related' component={RelatedMovies} />
          </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);