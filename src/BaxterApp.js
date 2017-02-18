import './BaxterApp.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Components
import Header from './search/components/header';

import { SearchContainer } from './search/containers/search';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <div className="container-fluid">
          <SearchContainer />
        </div>
      </div>
    );
  }
}

const BaxterApp = () => ( <Provider store={store}><App /></Provider> )


export default BaxterApp;
