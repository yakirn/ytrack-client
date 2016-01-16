'use strict';

import React from 'react';

require('styles//LoginComponent.scss');

class LoginComponent extends React.Component {
  render() {
    return (
        <div className="Login">
          { 
          	this.props.profile != undefined ?
      			(<span>Welcom {this.props.profile.name}</span>) :
				(<button type="button" onClick={this.onLoginClick} >Login</button>)
			}
        </div>
      );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
