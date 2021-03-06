// Core
import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              <img  role="presentation" src={require('../../../public/logo-baxter@2x.png')}/>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              {/* <Link className="navbar-brand" to="/sign_in">Sign In</Link> */}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
