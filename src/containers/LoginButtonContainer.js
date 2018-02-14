import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginButton } from 'components'
import {
  loginWithFacebook,
  loginWithTwitter,
  loginWithGoogle,
} from 'ducks/modules/auth'

class LoginButtonContainer extends Component {
  render() {
    const { redirectToMain, ...rest } = this.props
    return (
      <React.Fragment>
        {
          redirectToMain ?
            <Redirect to="/" />
          : <LoginButton {...rest} />
        }
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    redirectToMain: state.auth.redirectToMain,
  }),
  dispatch => ({
    onFacebookLogin: () => dispatch(loginWithFacebook()),
    onTwitterLogin: () => dispatch(loginWithTwitter()),
    onGoogleLogin: () => dispatch(loginWithGoogle()),
  }),
)(LoginButtonContainer)
