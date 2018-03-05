import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LikeButton } from 'components'

class LikeButtonContainer extends Component {
  static defaultProps = {
    likeCount: 0,
  }
  render() {
    const { likeCount } = this.props
    return (
      <LikeButton likeCount={likeCount} />
    )
  }
}

export default connect()(LikeButtonContainer)
