// Core
import React, { Component } from 'react';

// Containers
import { ResultsContainer } from '../containers/results'
import { ProfileContainer } from '../containers/profile'
import { FilterContainer } from '../containers/filter'
import { OverviewContainer } from '../containers/overview'
import CircularProgress from 'material-ui/CircularProgress';

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

          <div className="col-md-12" id="SearchResults">
            <ResultsContainer accounts={{}}/>
          </div>


      )
    }
  }

  showFetching() {
    if (this.props.showFetching === true) {
      return (
        <div className="row">
          <div className="col-md-12">
            <center><CircularProgress id="searchFetching" color="#FF4C42"/></center>
          </div>
        </div>
      )
    }
  }

  showProfile() {
    if (this.props.showProfile === true) {
      return (
        <ProfileContainer />
      )
    }
  }

  render() {
    return (
      <div id="Search">
        <div className="container">
          <div className="row">

            <div className="col-md-12" id="SearchFilterResults">
              { this.showFilter() }
              { this.showOverview() }
              { this.showResults() }
              { this.showFetching() }
            </div>
            { /** Selected Profile **/ }
            <div className="col-md-3" id="SearchProfile">
              { this.showProfile() }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
