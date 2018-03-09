import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import { LIGHTER_GRAY } from 'constants/color'

const Wrapper = styled.ul`
  padding: 1rem 1rem;
  min-height: 100vh;
  background-color: ${LIGHTER_GRAY};
`

const Total = styled.div`
  padding: 0 .5rem .7rem;
  & > em {
    font-weight: bold;
  }
`

const MyCourseList = ({ courses }) => (
  <React.Fragment>
    <Wrapper>
      {courses !== null ?
        <Total>총 <em>{courses.length}개</em>의 등록한 강의가 있습니다.</Total> :
        <Total>등록한 강의가 없습니다.</Total>
      }
      {courses ?
        courses.map(course => (
          <CourseCard key={course.courseKey} course={course} />
        ))
        : null
      }
    </Wrapper>
  </React.Fragment>
)

export default MyCourseList
