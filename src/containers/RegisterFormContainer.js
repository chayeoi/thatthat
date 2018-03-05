import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RegisterForm } from 'components'
import { registerAsAcademy, initializeRegistration } from 'ducks/modules/registration'

class RegisterFormContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { completeRegistering, ...rest } = this.props
    return (
      completeRegistering ?
        <Redirect to="/mypage" />
        : <RegisterForm {...rest} />
    )
  }
}

export default connect(
  ({ registration }) => ({
    isRegistering: registration.isRegistering,
    completeRegistering: registration.completeRegistering,
    errorMessage: registration.errorMessage,
  }),
  dispatch => ({
    onSubmit: input => dispatch(registerAsAcademy(input)),
    onMount: () => dispatch(initializeRegistration()),
  }),
)(RegisterFormContainer)
