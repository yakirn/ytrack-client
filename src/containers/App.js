/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute
} from 'react-router';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, search, history, realted} = this.props;
    return <div realted={realted}> this should not be included in the app </div>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired,
  search: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  realted: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    search: state.search,
    user: state.user,
    realted: state.realted
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    searchMovies: require('../actions/movies/search.js'),
    login: require('../actions/user/login.js'),
    realted: require('../actions/movies/realted.js')
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
