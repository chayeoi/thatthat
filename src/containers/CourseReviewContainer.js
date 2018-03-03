import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseReview } from 'components'
import {
  DeleteReviewButtonContainer,
  ReviewFormContainer,
} from 'containers'
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
    const { reviews, currentUserId, match: { params: { courseKey } } } = this.props
    return (
      <CourseReview
        reviews={reviews}
        buttonRender={(uid, reviewKey, rating) => (
          uid === currentUserId ?
            <DeleteReviewButtonContainer
              uid={uid}
              reviewKey={reviewKey}
              courseKey={courseKey}
              rating={rating}
            />
            : null
        )}
        formRender={() => (<ReviewFormContainer courseKey={courseKey} />)}
      />
    )
  }
}

export default connect(
  state => ({
    reviews: state.review.reviews,
    currentUserId: state.review.currentUserId,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourseReview(courseKey)),
  }),
)(CourseReviewContainer)
