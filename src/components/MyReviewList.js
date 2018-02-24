import React from 'react'
import { ReviewCard } from 'components'

const MyReviewList = ({ reviews }) => (
  <ul>
    {reviews.map(review => (
      <ReviewCard key={review.reviewKey} review={review} />
    ))}
  </ul>
)

export default MyReviewList
