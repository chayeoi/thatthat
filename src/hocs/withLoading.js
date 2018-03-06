import React, { Component } from 'react'
import { Loader } from 'semantic-ui-react'

const withLoading = WrappedComponent => (
  class extends Component {
    render() {
      const { isLoading, ...props } = this.props
      return (
        isLoading ?
          <Loader active content="로딩 중" />
          : <WrappedComponent {...props} />
      )
    }
  }
)

export default withLoading
