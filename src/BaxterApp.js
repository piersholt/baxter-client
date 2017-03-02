import './css/BaxterApp.css';
import './css/magic-check.css';
import '../public/fonts/font-face.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { configure } from "redux-auth";
import { AuthGlobals } from "redux-auth/bootstrap-theme";

// Components
import Header from './search/components/header';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class BaxterApp extends Component {
  render() {
    return (
       <MuiThemeProvider>
        <Provider store={store}>
          <div id="layout">
            <AuthGlobals />
            <Header />
            <div className="container">
              <div id="app">
                { this.props.children }
              </div>
            </div>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default BaxterApp;

export function renderApp() {
  store.dispatch(configure(
    { apiUrl: "https://dredger.piersholt.com:22786/api" },
    { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
  ))
}
