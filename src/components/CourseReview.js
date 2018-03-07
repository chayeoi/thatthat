import React from 'react'
import styled from 'styled-components'
import { ReviewCard } from 'components'

const Wrapper = styled.ul`
  padding: 1rem 1rem 64px;
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

const CourseReview = ({ reviews, buttonRender, formRender }) => (
  <React.Fragment>
    <Wrapper>
      <CenterBox>
        {reviews !== null ?
          <Total>총 <em>{reviews.length}개</em>의 리뷰가 있습니다.</Total> :
          <Total>등록된 리뷰가 없습니다.</Total>
        }
        {reviews ?
          reviews.map(review => (
            <ReviewCard key={review.reviewKey} {...review} render={buttonRender} />
          ))
          : null
        }
      </CenterBox>
    </Wrapper>
    {formRender()}
  </React.Fragment>
)

export default CourseReview
