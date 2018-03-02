import React from 'react'
import { ReviewCard } from 'components'

const CourseReview = ({ reviews }) => (
  <ul>
    {reviews ?
      reviews.map(({ reviewKey, ...rest }) => (
        <ReviewCard key={reviewKey} {...rest} />
      ))
      : <div>등록된 리뷰가 없습니다.</div>
    }
  </ul>
)

export default CourseReview
