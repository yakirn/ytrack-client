require('normalize.css');
require('styles/App.css');

import React from 'react';
import  Router from 'react-router';
import Header from './HeaderComponent';
// import {Route} from 'react-router';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="ytrack-app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
