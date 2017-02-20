import React from 'react';
import ReactDOM from 'react-dom';

import BaxterApp from './BaxterApp';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { renderApp } from "./BaxterApp";

renderApp()

ReactDOM.render(
  <BaxterApp />, document.getElementById('root')
);
