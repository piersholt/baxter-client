import './App.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Components
import Filter from './search/components/filter';

// Containers
import { ResultsContainer } from './search/containers/results'
import { ProfileContainer } from './search/containers/profile'
import { FilterContainer } from './search/containers/filter'

class App extends Component {
  render() {
    return (
      <div className="BaxterApp">
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
      </div>
    );
  }
}

const BaxterApp = () => ( <Provider store={store}><App /></Provider> )

export default BaxterApp;
