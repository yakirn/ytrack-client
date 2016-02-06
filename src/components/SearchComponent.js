'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PureComponent from 'react-pure-render/component';
import _ from 'lodash';

require('styles//Search.scss');

export default class SearchComponent extends PureComponent {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
      e.preventDefault();
      var query = ReactDOM.findDOMNode(this.refs.query).value.trim();
      var year = ReactDOM.findDOMNode(this.refs.year).value.trim();
      if (!query) return;
      if(!this.props.isFetching)
        this.props.onSearch(query, year);

  };

  render() {
    return (
        <div>
          <form className="Search" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Search title or description..." ref="query"/>
              <input type="text" placeholder="Year" ref="year"/>
              <button type="submit">Search</button>
          </form>
        </div>
    );
  }
}

// SearchComponent.displayName = 'SearchComponent';

// Uncomment properties you need
SearchComponent.propTypes = {
  onSearch: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  query: React.PropTypes.string,
  searchResults: React.PropTypes.array
};
