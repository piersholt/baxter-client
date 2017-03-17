import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configure } from "redux-auth";

import BaxterApp from './BaxterApp';
import { SearchContainer } from './search/containers/search';
import { SignInContainer } from './authentication/containers/sign_in';

const reduxSyncHistory = syncHistoryWithStore(browserHistory, store)

const checkAuth = (nextState, replace, callback) => {
  let loading = store.getState().auth.get('authentication').get('loading')
  let signedIn = store.getState().auth.get('user').get('isSignedIn')

  if (!loading && !signedIn) {
    console.log('Not signed in!')
    replace('/sign_in')
  }

  callback()
}

store.dispatch(configure(
  { apiUrl: "https://dredger.piersholt.com:22786/api" },
  { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
)).then(() => {
  ReactDOM.render(
    <Router history={reduxSyncHistory}>
      <Route path="/" component={BaxterApp}>
        <IndexRoute component={SearchContainer} onEnter={checkAuth}/>
        <Route path="/sign_in" component={SignInContainer} />
      </Route>
    </Router>, document.getElementById('root')
  );
});
