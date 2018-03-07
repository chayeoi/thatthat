import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseReview } from 'components'
import {
  DeleteReviewButtonContainer,
  ReviewFormContainer,
} from 'containers'
import { withLoading } from 'hocs'
import { loadCourseReview } from 'ducks/modules/review'

const CourseReviewWithLoading = withLoading(CourseReview)
class CourseReviewContainer extends Component {
  static defaultProps = {
    onMount: () => {},
  }

  componentDidMount() {
    const { courseKey } = this.props.match.params
    this.props.onMount(courseKey)
  }

  componentWillReceiveProps(nextProps) {
    const {
      completeCreating: currentCreating,
      completeDeleting: currentDeleting,
    } = this.props
    const {
      completeCreating: nextCreating,
      completeDeleting: nextDeleting,
    } = nextProps
    if (currentCreating !== nextCreating || currentDeleting !== nextDeleting) {
      const { courseKey } = this.props.match.params
      this.props.onMount(courseKey)
    }
  }

  render() {
    const {
      isLoading,
      reviews,
      currentUserId,
      userClass,
      match: { params: { courseKey } },
    } = this.props
    return (
      <CourseReviewWithLoading
        isLoading={isLoading}
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
        formRender={() => (userClass === 'reviewer' && <ReviewFormContainer courseKey={courseKey} />)}
      />
    )
  }
}

export default connect(
  ({ review }) => ({
    isLoading: review.isLoading,
    reviews: review.reviews,
    currentUserId: review.currentUserId,
    completeCreating: review.completeCreating,
    completeDeleting: review.completeDeleting,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourseReview(courseKey)),
  }),
)(CourseReviewContainer)
