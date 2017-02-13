import './App.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

// Components
import Search from './search/components/search';

class App extends Component {
  render() {
    return (
      <div className="BaxterApp">
        <Search />
      </div>
    );
  }
}

const BaxterApp = () => ( <Provider store={store}><App /></Provider> )

export default BaxterApp;
