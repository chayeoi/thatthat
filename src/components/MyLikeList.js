import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import * as color from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${color.GRAY2};
`

const MyLikeList = ({ likes }) => (
  <Wrapper>
    {likes.length ? <div>총 {likes.length}개의 관심 강의가 있습니다.</div> : null}
    <ul>
      {likes ?
        likes.map(course => (
          <CourseCard key={course.courseKey} course={course} />
        ))
        : <div>좋아요 누른 강의가 없습니다.</div>
      }
    </ul>
  </Wrapper>
)

export default MyLikeList
