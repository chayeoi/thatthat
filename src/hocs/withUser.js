import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { requestAuthentication } from 'ducks/modules/user'

const withUser = WrappedComponent => (
  connect(
    ({ user }) => ({
      isLoading: user.isLoading,
      userClass: user.userClass,
      redirectToLogin: user.redirectToLogin,
    }),
    dispatch => ({
      onMount: () => dispatch(requestAuthentication()),
    }),
  )(class extends Component {
    static defaultProps = {
      isLoading: false,
      useClass: '',
      redirectToLogin: false,
      onMount: () => {},
    }

    state = {
      isLoading: false,
      redirectToLogin: false,
    }

    componentDidMount() {
      const { userClass } = this.props
      if (!userClass) {
        this.props.onMount()
      }
    }

    render() {
      const { isLoading, userClass, redirectToLogin } = this.props
      return (
        <React.Fragment>
          {isLoading && <Loader active />}
          {redirectToLogin && <Redirect to="/login" />}
          {userClass && <WrappedComponent {...this.props} />}
        </React.Fragment>
      )
    }
  })
)

export default withUser
