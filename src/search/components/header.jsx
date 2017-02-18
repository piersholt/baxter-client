// Core
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Baxter</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
