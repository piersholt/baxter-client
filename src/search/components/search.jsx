// Core
import React, { Component } from 'react';

// Containers
import { ResultsContainer } from '../containers/results'
import { ProfileContainer } from '../containers/profile'
import { FilterContainer } from '../containers/filter'
import { OverviewContainer } from '../containers/overview'

class Search extends Component {
  render() {
    return (
      <div id="Search">
        { /** Search Filter **/ }
        <FilterContainer />
        { /** Search Overview, Results + Profile **/ }
        <div className="row">
          <div className="col-md-9" id="SearchFilterResults">
            { /** Search Overview **/ }
            <div className="row">
              <div className="col-md-12" id="SearchOverview">
                <OverviewContainer />
              </div>
            </div>
            { /** Search Results **/ }
            <div className="row">
              <div className="col-md-12" id="SearchResults">
                <ResultsContainer accounts={{}}/>
              </div>
            </div>
          </div>
          { /** Selected Profile **/ }
          <div className="col-md-3" id="SearchProfile">
            <ProfileContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
