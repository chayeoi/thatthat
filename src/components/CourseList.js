import React from 'react'
import styled from 'styled-components'
import { CourseCard } from 'components'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
`

const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto !important;
`

const CourseList = ({ courses, userClass, render }) => (
  <Wrapper>
    <CenterBox>
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
    </CenterBox>
  </Wrapper>
)

export default CourseList
