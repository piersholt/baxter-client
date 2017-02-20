import './BaxterApp.css';

// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import { configure } from "redux-auth";
import { AuthGlobals } from "redux-auth/bootstrap-theme";
import { EmailSignInForm } from "redux-auth/bootstrap-theme";

// Components
import Header from './search/components/header';

import { SearchContainer } from './search/containers/search';

class App extends Component {
  render() {
    return (
      <div id="layout">
        <AuthGlobals />
        <Header />
        <div className="container">
          <EmailSignInForm />
          <SearchContainer />
        </div>
      </div>
    );
  }
}

const BaxterApp = () => ( <Provider store={store}><App /></Provider> )


export default BaxterApp;

export function renderApp() {
  store.dispatch(configure(
    { apiUrl: "http://localhost:3100/api" },
    { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
  ))
}
