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
  static defaultProps = {
    redirectToMain: false,
  }
  render() {
    const { redirectToMain, ...rest } = this.props
    return (
      redirectToMain ?
        <Redirect to="/" />
        : <LoginButton {...rest} />
    )
  }
}

export default connect(
  ({ auth }) => ({
    redirectToMain: auth.redirectToMain,
  }),
  dispatch => ({
    onFacebookLogin: () => dispatch(loginWithFacebook()),
    onTwitterLogin: () => dispatch(loginWithTwitter()),
    onGoogleLogin: () => dispatch(loginWithGoogle()),
  }),
)(LoginButtonContainer)
