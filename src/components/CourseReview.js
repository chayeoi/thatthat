import React from 'react'
import styled from 'styled-components'
import { ReviewCard } from 'components'
import { GRAY2 } from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${GRAY2};
`

const CourseReview = ({ reviews, buttonRender, formRender }) => (
  <React.Fragment>
    <Wrapper>
      {reviews ?
        reviews.map(review => (
          <ReviewCard key={review.reviewKey} {...review} render={buttonRender} />
        ))
        : <div>등록된 리뷰가 없습니다.</div>
      }
    </Wrapper>
    {formRender()}
  </React.Fragment>
)

export default CourseReview
