import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import { GRAY2 } from '../constants/color'

const Wrapper = styled.ul`
  padding: 1rem 1rem;
  min-height: 100vh;
  background-color: ${GRAY2};
`

const MyCourseList = ({ courses }) => (
  <Wrapper>
    {courses ?
      courses.map(course => (
        <CourseCard key={course.courseKey} course={course} />
      ))
      : <div>등록한 강의가 없습니다.</div>
    }
  </Wrapper>
)

export default MyCourseList
