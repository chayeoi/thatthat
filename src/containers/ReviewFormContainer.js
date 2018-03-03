import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ReviewForm } from 'components'
import { createReview } from 'ducks/modules/review'

class ReviewFormContainer extends Component {
  static defaultProps = {
    isCreating: false,
    courseKey: '',
    onSubmit: () => {},
  }

  render() {
    return (
      <ReviewForm {...this.props} />
    )
  }
}

export default connect(
  state => ({
    isCreating: state.review.isCreating,
    isCompleted: state.review.isCompleted,
  }),
  dispatch => ({
    onSubmit: (input, courseKey) => dispatch(createReview(input, courseKey)),
  }),
)(ReviewFormContainer)
