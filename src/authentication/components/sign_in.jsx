import React from 'react';

import { EmailSignInForm } from "redux-auth/bootstrap-theme";

class SignIn extends React.Component {

  redirectIfSignedIn = () => {
    if (this.props.signedIn) {
      console.log('signed in!')
      this.props.redirect()
    }
  }

  render () {

    this.redirectIfSignedIn()

    return (
      <div className="container">
        <div className="row">
            <div className="Absolute-Center is-Responsive">
              <EmailSignInForm />
            </div>
        </div>
      </div>
    )
  }
}

export default SignIn;
