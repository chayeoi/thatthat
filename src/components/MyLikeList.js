import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import * as color from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${color.GRAY2};
`
const Total = styled.div`
  padding: 0 .5rem .7rem;
  & > em {
    font-weight: bold;
  }
`

const MyLikeList = ({ likes }) => (
  <Wrapper>
    {likes.length ?
      <Total>총 <em>{likes.length}개</em>의 관심 강의가 있습니다.</Total> :
      <Total>관심 강의가 없습니다.</Total>
    }
    <ul>
      {likes ?
        likes.map(course => (
          <CourseCard key={course.courseKey} course={course} />
        ))
        : null
      }
    </ul>
  </Wrapper>
)

export default MyLikeList
