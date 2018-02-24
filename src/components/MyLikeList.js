import React from 'react'
import { CourseCard } from 'components'

const MyLikeList = ({ likes }) => (
  <ul>
    {likes.map(course => (
      <CourseCard key={course.courseKey} course={course} />
    ))}
  </ul>
)

export default MyLikeList
