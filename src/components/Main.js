require('normalize.css');
require('styles/App.css');

import React from 'react';
import Header from '../containers/Header';
// import {Route} from 'react-router';

import DevTools from '../containers/DevTools';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="ytrack-app">
        <Header />
        {this.props.children}
        <DevTools />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
