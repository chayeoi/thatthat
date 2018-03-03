import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DeleteReviewButton } from 'components'

class DeleteReviewButtonContainer extends Component {
  render() {
    return (
      <DeleteReviewButton />
    )
  }
}

export default connect()(DeleteReviewButtonContainer)
