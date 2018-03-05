import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LikeButton } from 'components'
import { toggleMyLike } from 'ducks/modules/category'

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

export default connect(
  null,
  (dispatch, { category: currentCategory, courseKey }) => ({
    onLike: () => dispatch(toggleMyLike({ currentCategory, courseKey })),
  }),
)(LikeButtonContainer)
