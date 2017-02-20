import React from 'react';
import ReactDOM from 'react-dom';

import BaxterApp from './BaxterApp';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { renderApp } from "./BaxterApp";

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import { SearchContainer } from './search/containers/search';
import { EmailSignInForm } from "redux-auth/bootstrap-theme";

renderApp()

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={BaxterApp}>
      <IndexRoute component={SearchContainer}/>
      <Route path="/sign_in" component={EmailSignInForm}/>
    </Route>
  </Router>, document.getElementById('root')
);
