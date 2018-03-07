import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyReviewList } from 'components'
import { withLoading } from 'hocs'
import { loadMyReviewList } from 'ducks/modules/myReview'

const MyReviewListWithLoading = withLoading(MyReviewList)
class MyReviewListContainer extends Component {
  static defaultProps = {
    isLoading: false,
    reviews: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { onMount, ...props } = this.props
    return (
      <MyReviewListWithLoading {...props} />
    )
  }
}

export default connect(
  ({ myReview }) => ({
    isLoading: myReview.isLoading,
    reviews: myReview.reviews,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyReviewList()),
  }),
)(MyReviewListContainer)
