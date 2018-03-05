import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'
import * as color from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${color.GRAY2};
`

const CourseList = ({ courses, userClass, render }) => (
  <Wrapper>
    {courses ?
      courses.map(course => (
        <CourseCard
          key={course.courseKey}
          course={course}
          userClass={userClass}
          render={render}
        />
      ))
      : <li>등록된 강의가 없습니다.</li>
    }
  </Wrapper>
)

export default CourseList
