import React, { Component } from 'react'
import { connect } from 'react-redux'
import { EditReviewButton } from 'components'


class EditReviewButtonContainer extends Component {
  render() {
    return (
      <EditReviewButton />
    )
  }
}

export default connect(
  state => ({}),
  dispatch => ({}),
)(EditReviewButtonContainer)
