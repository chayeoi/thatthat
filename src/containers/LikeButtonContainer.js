import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LikeButton } from 'components'

class LikeButtonContainer extends Component {
  render() {
    return (
      <LikeButton />
    )
  }
}

export default connect()(LikeButtonContainer)
