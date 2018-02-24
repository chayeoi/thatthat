import React from 'react'
import { CourseCard } from 'components'

const CourseList = ({ courses }) => (
  <ul>
    {courses.map(course => (
      <CourseCard key={course.courseKey} course={course} />
    ))}
  </ul>
)

export default CourseList
