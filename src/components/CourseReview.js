import React from 'react'
import { ReviewCard } from 'components'

const CourseReview = ({ reviews }) => (
  <ul>
    {reviews.map(({ reviewKey, ...rest }) => (
      <ReviewCard key={reviewKey} {...rest} />
    ))}
  </ul>
)

export default CourseReview
