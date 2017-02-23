// Core
import React, { Component } from 'react';

// Containers
import { ResultsContainer } from '../containers/results'
import { ProfileContainer } from '../containers/profile'
import { FilterContainer } from '../containers/filter'
import { OverviewContainer } from '../containers/overview'

class Search extends Component {
  showFilter() {
    if (this.props.showFilter === true) {
      return (
        /** Search Filter **/
        <FilterContainer />
      )
    }
  }

  showOverview() {
    if (this.props.showOverview === true) {
      return (
        /** Search Overview **/
        <div className="row">
          <div className="col-md-12" id="SearchOverview">
            <OverviewContainer />
          </div>
        </div>
      )
    }
  }

  showResults() {
    if (this.props.showResults === true) {
      return (
        /** Search Results **/
        <div className="row">
          <div className="col-md-12" id="SearchResults">
            <ResultsContainer accounts={{}}/>
          </div>
        </div>

      )
    }
  }

  render() {
    return (
      <div id="Search">
        <div className="container">
          <div className="row">

            <div className="col-md-9" id="SearchFilterResults">
              { this.showFilter() }
              { this.showOverview() }
              { this.showResults() }
            </div>
            { /** Selected Profile **/ }
            <div className="col-md-3" id="SearchProfile">
              <ProfileContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
