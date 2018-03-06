import React from 'react'
import { MyReviewCard } from 'components'
import styled from 'styled-components'
import { GRAY2 } from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${GRAY2};
`

const Total = styled.div`
  padding: 0 .5rem .7rem;
  & > em {
    font-weight: bold;
  }
`

const MyReviewList = ({ reviews }) => (
  <React.Fragment>
    <Wrapper>
      {reviews.length ?
        <Total>총 <em>{reviews.length}개</em>의 리뷰가 있습니다.</Total> :
        <Total>등록한 리뷰가 없습니다.</Total>
      }
      {reviews ?
        reviews.map(review => (
          <MyReviewCard key={review.reviewKey} review={review} />
        ))
        : null
      }
    </Wrapper>
  </React.Fragment>
)

export default MyReviewList
