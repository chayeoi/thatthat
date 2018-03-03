import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseReview } from 'components'
import { ReviewFormContainer } from 'containers'
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
    const { reviews, match: { params: { courseKey } } } = this.props
    return (
      <CourseReview
        reviews={reviews}
        render={() => (<ReviewFormContainer courseKey={courseKey} />)}
      />
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
