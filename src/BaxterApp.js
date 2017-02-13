import './BaxterApp.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Components
import Search from './search/components/search';
import Header from './search/components/header';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <Header />
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

const BaxterApp = () => ( <Provider store={store}><App /></Provider> )


export default BaxterApp;
