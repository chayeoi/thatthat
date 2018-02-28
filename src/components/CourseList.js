import React from 'react'
import { CourseCard } from 'components'

const CourseList = ({ courses }) => (
  <ul>
    {courses ?
      courses.map(course => (
        <CourseCard key={course.courseKey} course={course} />
      ))
      : <li>등록된 강의가 없습니다.</li>
    }
  </ul>
)

export default CourseList
