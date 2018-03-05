import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LikeButton } from 'components'

class LikeButtonContainer extends Component {
  static defaultProps = {
    likeCount: 0,
  }

  render() {
    return (
      <LikeButton {...this.props} />
    )
  }
}

export default connect()(LikeButtonContainer)
