import React, { Component } from 'react'
import * as firebase from 'firebase'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'

const withAuth = WrappedComponent => (
  class extends Component {
    state = {
      isLoading: false,
      redirectToLogin: false,
    }

    componentWillMount() {
      const { currentUser } = firebase.auth()
      if (!currentUser) {
        this.setState({
          isLoading: true,
        })
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
          unsubscribe()
          if (user) {
            this.setState({
              isLoading: false,
            })
          } else {
            this.setState({
              isLoading: false,
              redirectToLogin: true,
            })
          }
        })
      }
    }

    render() {
      const { isLoading, redirectToLogin } = this.state
      return (
        <React.Fragment>
          {isLoading && <Loader />}
          {redirectToLogin && <Redirect />}
          {!(isLoading || redirectToLogin) && <WrappedComponent {...this.props} />}
        </React.Fragment>
      )
    }
  }
)

export default withAuth
