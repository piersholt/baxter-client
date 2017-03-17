import React from 'react';
import ReactDOM from 'react-dom';

import BaxterApp from './BaxterApp';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { renderApp } from "./BaxterApp";

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { SearchContainer } from './search/containers/search';
import SignIn from './authentication/components/sign_in';

const reduxSyncHistory = syncHistoryWithStore(browserHistory, store)

renderApp()
import store from './store';
const checkAuth = (nextState, replace, callback) => {
  let loading = store.getState().auth.get('authentication').get('loading')
  let signedIn = store.getState().auth.get('user').get('isSignedIn')

  if (!loading && !signedIn) {
    console.log('Not signed in!')
    replace('/sign_in')
  }

  callback()
}

import { configure } from "redux-auth";
store.dispatch(configure(
  { apiUrl: "https://dredger.piersholt.com:22786/api" },
  { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
)).then(() => {
  ReactDOM.render(
    <Router history={reduxSyncHistory}>
      <Route path="/" component={BaxterApp}>
        <Route path="/sign_in" component={SignIn} />
        <IndexRoute component={SearchContainer} onEnter={checkAuth}/>
      </Route>
    </Router>, document.getElementById('root')
  );
});
