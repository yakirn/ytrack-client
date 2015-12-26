'use strict';

import React from 'react';
import App from './Main';
import { Provider } from 'react-redux';
import configureStore from '../stores/configureStore'

require('styles//Root.scss');

const store = configureStore();

class RootComponent extends React.Component {
  render() {
    return (
	    <Provider store={ store }>
		    <App />
	    </Provider>
    );
  }
}

RootComponent.displayName = 'RootComponent';

// Uncomment properties you need
// RootComponent.propTypes = {};
// RootComponent.defaultProps = {};

export default RootComponent;
