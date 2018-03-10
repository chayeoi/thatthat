import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { RegisterForm } from 'components'
import { registerAsAcademy, initializeRegistering } from 'ducks/modules/registering'

class RegisterFormContainer extends Component {
  static defaultProps = {
    isRegistering: false,
    completeRegistering: false,
    errorMessage: '',
    onSubmit: () => {},
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
  ({ registering }) => ({
    isRegistering: registering.isRegistering,
    completeRegistering: registering.completeRegistering,
    errorMessage: registering.errorMessage,
  }),
  dispatch => ({
    onSubmit: input => dispatch(registerAsAcademy(input)),
    onMount: () => dispatch(initializeRegistering()),
  }),
)(RegisterFormContainer)
