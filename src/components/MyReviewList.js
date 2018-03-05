import React from 'react'
import { MyReviewCard } from 'components'
import styled from 'styled-components'
import { GRAY2 } from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${GRAY2};
`

const MyReviewList = ({ reviews }) => (
  <React.Fragment>
    {reviews.length ? <div>총 {reviews.length}개의 리뷰가 있습니다.</div> : null}
    <Wrapper>
      {reviews ?
        reviews.map(review => (
          <MyReviewCard key={review.reviewKey} review={review} />
        ))
        : <div>등록한 리뷰가 없습니다.</div>
      }
    </Wrapper>
  </React.Fragment>
)

export default MyReviewList
