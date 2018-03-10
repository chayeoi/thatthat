import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeleteReviewButton } from 'components'
import { DeleteReview } from 'ducks/modules/review'

class DeleteReviewButtonContainer extends Component {
  static defaultProps = {
    onDelete: () => {},
  }

  render() {
    const { onDelete } = this.props
    return (
      <DeleteReviewButton onDelete={onDelete} />
    )
  }
}

export default connect(
  null,
  (dispatch, {
    uid,
    reviewKey,
    courseKey,
    rating,
  }) => ({
    onDelete: () => dispatch(DeleteReview({
      uid,
      reviewKey,
      courseKey,
      rating,
    })),
  }),
)(DeleteReviewButtonContainer)
