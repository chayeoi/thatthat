import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseReview } from 'components'
import { loadCourseReview } from 'ducks/modules/review'

class CourseReviewContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }

  componentDidMount() {
    const { courseKey } = this.props.match.params
    this.props.onMount(courseKey)
  }

  render() {
    console.log(this.props.reviews)
    const { reviews } = this.props
    return (
      <CourseReview reviews={reviews} />
    )
  }
}

export default connect(
  state => ({
    reviews: state.review.reviews,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourseReview(courseKey)),
  }),
)(CourseReviewContainer)
