// Core
import React, { Component } from 'react';

// Containers
import { ResultsContainer } from '../containers/results'
import { ProfileContainer } from '../containers/profile'
import { FilterContainer } from '../containers/filter'

class Search extends Component {
  render() {
    return (    
      <div className="row">
        { /** Search Filter + Results **/ }
        <div className="col-md-9" id="SearchFilterResults">
          { /** Search Filter **/ }
          <div className="row">
            <div className="col-md-12" id="SearchFilter">
              <FilterContainer />
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
    );
  }
}

export default Search;
