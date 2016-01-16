import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import SearchComponent from '../components/SearchComponent';
const onSearch = require('../actions/search/searchMovies.js')

class SearchMovies extends Component {
	render() {
	    return (
	            <SearchComponent {...this.props.search} onSearch={(query) => this.props.dispatch(onSearch(query))} />
	      );
	  }
}

function mapStateToProps(state) {
  return { search: state.search };
}

export default connect(mapStateToProps)(SearchMovies);
