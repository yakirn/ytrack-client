import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchComponent from '../components/SearchComponent';
import SearchResultsComponent from '../components/SearchResultsComponent';
import PureComponent from 'react-pure-render/component';
import SearchMoviesAction from '../actions/movies/search';
import RelatedMoviesAction from '../actions/movies/related';


class SearchMovies extends PureComponent {

  render() {
      const { search, actions } = this.props;

	    return (
  	    	<div>
  	            <SearchComponent {...search} 
                                  onSearch = { (query, year) => actions.searchMovies(query, year) } />
  	           <SearchResultsComponent {...search} showRelated = { (traktId) => actions.relatedMovies(traktId) } />
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
  const actions = {
    searchMovies: SearchMoviesAction,
    relatedMovies: RelatedMoviesAction
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMovies);
