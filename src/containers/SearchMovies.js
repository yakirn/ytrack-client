import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../components/SearchComponent';
import ResultsComponent from '../components/ResultsComponent'
import {searchMovies} from '../actions/search/searchMovies.js'
import PureComponent from 'react-pure-render/component';


class SearchMovies extends PureComponent {
	render() {
	    return (
	    	<div>
	            <SearchComponent {...this.props.search} onSearch={(query) => this.props.dispatch(searchMovies(query))} />
	            <ResultsComponent {...this.props.search} />
			</div>
	      );
	  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps)(SearchMovies);
