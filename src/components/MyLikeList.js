import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import * as color from '../constants/color'

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

const MyLikeList = ({ likes }) => (
  <Wrapper>
    <CenterBox>
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
    </CenterBox>
  </Wrapper>
)

export default MyLikeList
