import React from 'react'
import { MyReviewCard } from 'components'

const MyReviewList = ({ reviews }) => (
  <React.Fragment>
    {reviews.length ? <div>총 {reviews.length}개의 리뷰가 있습니다.</div> : null}
    <ul>
      {reviews ?
        reviews.map(review => (
          <MyReviewCard key={review.reviewKey} review={review} />
        ))
        : <div>등록한 리뷰가 없습니다.</div>
      }
    </ul>
  </React.Fragment>
)

export default MyReviewList
