import React from 'react'
import { MyReviewCard } from 'components'

const MyReviewList = ({ reviews }) => (
  <ul>
    {reviews ?
      reviews.map(review => (
        <MyReviewCard key={review.reviewKey} review={review} />
      ))
      : <div>등록한 리뷰가 없습니다.</div>
    }
  </ul>
)

export default MyReviewList
