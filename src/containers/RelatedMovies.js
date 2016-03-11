import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RelatedMoviesComponent from '../components/RelatedMoviesComponent';
import PureComponent from 'react-pure-render/component';
import { routeActions } from 'react-router-redux';
import RelatedMoviesAction from '../actions/movies/related';


class RelatedMovies extends PureComponent {
	render() {
		console.debug(this.props);
	    return (
	    	<div>
	            <RelatedMoviesComponent related = {this.props.related.relatedResults} 
                                showRelated = { (traktId) => this.props.actions.relatedMovies(traktId) } />
			</div>
	      );
	  }
}

function mapStateToProps(state, ownProps) {
  return { 
  	related: state.related 
  };  
}
function mapDispatchToProps(dispatch) {
  const actions = {
    relatedMovies: RelatedMoviesAction
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedMovies);
