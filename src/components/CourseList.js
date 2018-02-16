import React from 'react'
import { CourseCard } from 'components'

const CourseList = ({ courses }) => (
  <React.Fragment>
    {courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ))}
  </React.Fragment>
)

export default CourseList
