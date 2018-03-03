import React from 'react'
import { ReviewCard } from 'components'

const CourseReview = ({ reviews, buttonRender, formRender }) => (
  <React.Fragment>
    <ul>
      {reviews ?
        reviews.map(({ reviewKey, ...rest }) => (
          <ReviewCard key={reviewKey} {...rest} render={buttonRender} />
        ))
        : <div>등록된 리뷰가 없습니다.</div>
      }
    </ul>
    {formRender()}
  </React.Fragment>
)

export default CourseReview
