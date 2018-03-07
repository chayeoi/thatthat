import React from 'react'
import { MyReviewCard } from 'components'
import styled from 'styled-components'

const Wrapper = styled.ul`
  padding: 1em;
`

const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto !important;
`

const Total = styled.div`
  padding: 0 .5rem .7rem;
  & > em {
    font-weight: bold;
  }
`

const MyReviewList = ({ reviews }) => (
  <Wrapper>
    <CenterBox>
      {reviews !== null ?
        <Total>총 <em>{reviews.length}개</em>의 리뷰가 있습니다.</Total> :
        <Total>등록한 리뷰가 없습니다.</Total>
      }
      {reviews ?
        reviews.map(review => (
          <MyReviewCard key={review.reviewKey} review={review} />
        ))
        : null
      } 
    </CenterBox>
  </Wrapper>
)

export default MyReviewList
