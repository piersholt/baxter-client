import './css/BaxterApp.css';
import './css/magic-check.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { configure } from "redux-auth";
import { AuthGlobals } from "redux-auth/bootstrap-theme";

// Components
import Header from './search/components/header';

class BaxterApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="layout">
          <AuthGlobals />
          <Header />
          <div className="container">
            <div id="app">
              {/* <EmailSignInForm />
              <SearchContainer /> */}
              { this.props.children }
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default BaxterApp;

export function renderApp() {
  store.dispatch(configure(
    { apiUrl: "http://localhost:3100/api" },
    { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
  ))
}
