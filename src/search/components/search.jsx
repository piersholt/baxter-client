// Core
import React, { Component } from 'react';

// Containers
import { ResultsContainer } from '../containers/results'
import { ProfileContainer } from '../containers/profile'
import { FilterContainer } from '../containers/filter'
import { OverviewContainer } from '../containers/overview'

class Search extends Component {
  showResults() {
    if (true === true) {
      return (

        <div className="container">
          <div className="row">
            <div className="col-md-12" id="SearchFilterResults">

              { /** Search Overview **/ }
              { this.showFilter() }
              <div className="col-md-12" id="SearchOverview">
                <OverviewContainer />
              </div>

              { /** Search Results **/ }
              <div className="col-md-12" id="SearchResults">
                <ResultsContainer accounts={{}}/>
              </div>

              { /** Selected Profile **/ }
              <div className="col-md-3" id="SearchProfile">
                <ProfileContainer />
              </div>

            </div>
          </div>
        </div>
      )
    }
  }

  showFilter() {
    if (this.props.showFilter === true) {
      return (
        /** Search Filter **/
        <FilterContainer />
      )
    }
  }

  render() {
    return (
      <div id="Search">
        { this.showResults() }
      </div>
    );
  }
}

export default Search;
