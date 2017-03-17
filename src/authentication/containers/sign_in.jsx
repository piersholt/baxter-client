import { connect } from 'react-redux'
import SignIn from '../components/sign_in'

import { push } from 'react-router-redux'


let mapStateToProps = (state) => {
  return {
    signedIn: state.auth.get('user').get('isSignedIn')
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    redirect: () => {
      dispatch(push('/'));
    }
  }
};

export const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn)
