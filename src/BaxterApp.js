import './css/BaxterApp.css';
import './css/magic-check.css';
import '../public/fonts/font-face.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AuthGlobals } from "redux-auth/bootstrap-theme";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store';

// Components
import Header from './search/components/header';

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
