import React from 'react'
import { CourseCard } from 'components'

const MyCourseList = ({ courses }) => (
  <ul>
    {courses ?
      courses.map(course => (
        <CourseCard key={course.courseKey} course={course} />
      ))
      : <div>등록한 강의가 없습니다.</div>
    }
  </ul>
)

export default MyCourseList
