import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchComponent from '../components/SearchComponent';
import ResultsComponent from '../components/ResultsComponent';
import { searchMovies } from '../actions/search/searchMovies.js';
import PureComponent from 'react-pure-render/component';
import { routeActions } from 'react-router-redux';
import SearchMoviesAction from '../actions/search/searchMovies';


class SearchMovies extends PureComponent {
	render() {
	    return (
	    	<div>
	            <SearchComponent {...this.props.search} onSearch={(query, year) => this.props.actions.searchMovies(query, year)} />
	            <ResultsComponent {...this.props.search} />
			</div>
	      );
	  }
}

function mapStateToProps(state, ownProps) {
  return { 
  	search: state.search 
  };  
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    searchMovies: SearchMoviesAction,
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
