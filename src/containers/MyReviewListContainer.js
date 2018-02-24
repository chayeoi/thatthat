import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyReviewList } from 'components'
import { loadMyReviewList } from 'ducks/modules/review'

class MyReviewListContainer extends Component {
  static defaultProps = {
    reviews: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { reviews } = this.props
    return (
      <MyReviewList reviews={reviews} />
    )
  }
}

export default connect(
  state => ({
    reviews: state.review.reviews,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyReviewList()),
  }),
)(MyReviewListContainer)
