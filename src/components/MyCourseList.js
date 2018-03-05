import React from 'react'
import { CourseCard } from 'components'

const MyCourseList = ({ courses }) => (
  <React.Fragment>
    {courses.length ? <div>총 {courses.length}개의 등록한 강의가 있습니다.</div> : null}
    <ul>
      {courses ?
        courses.map(course => (
          <CourseCard key={course.courseKey} course={course} />
        ))
        : <div>등록한 강의가 없습니다.</div>
      }
    </ul>
  </React.Fragment>
)

export default MyCourseList
