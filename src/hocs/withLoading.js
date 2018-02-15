import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

const withLoading = WrappedComponent => (
  class extends Component {
    render() {
      const { isLoading } = this.props
      return (
        isLoading ?
          <Loader />
          : <WrappedComponent />
      )
    }
  }
)

export default withLoading
