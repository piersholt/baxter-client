import './BaxterApp.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

import store from './store';

// Components
import Search from './search/components/search';

class BaxterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
           <Route path="/" component={Search}>
           </Route>
         </Router>
      </Provider>
    );
  }
}

export default BaxterApp;
