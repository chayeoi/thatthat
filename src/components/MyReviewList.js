import React from 'react'
import { ReviewCard } from 'components'

const MyReviewList = ({ reviews }) => (
  <ul>
    {reviews ?
      reviews.map(review => (
        <ReviewCard key={review.reviewKey} review={review} />
      ))
      : <div>등록한 리뷰가 없습니다.</div>
    }
  </ul>
)

export default MyReviewList
