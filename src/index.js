import React from 'react';
import ReactDOM from 'react-dom';

import BaxterApp from './BaxterApp';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { renderApp } from "./BaxterApp";

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { SearchContainer } from './search/containers/search';
import SignIn from './authentication/components/sign_in';


renderApp()
import store from './store';

import { configure } from "redux-auth";
store.dispatch(configure(
  { apiUrl: "https://dredger.piersholt.com:22786/api" },
  { isServer: false, clientOnly: true, cleanSession: false, storage: "localStorage" }
)).then(() => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={BaxterApp}>
        <IndexRoute component={SearchContainer}/>
        <Route path="/sign_in" component={SignIn} />
      </Route>
    </Router>, document.getElementById('root')
  );
});
