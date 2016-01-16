'use strict';

import React from 'react';
import LoginComponent from '../components/LoginComponent'
import { connect } from 'react-redux';

require('styles//Header.scss');

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="header-component">
         <LoginComponent {...this.props.user} />
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(HeaderComponent);
