// Core
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><img src={require('../../../public/logo-baxter@2x.png')}/></a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
