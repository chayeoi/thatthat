import React from 'react'
import { CourseCard } from 'components'

const MyLikeList = ({ likes }) => (
  <ul>
    {likes ?
      likes.map(course => (
        <CourseCard key={course.courseKey} course={course} />
      ))
      : <div>좋아요 누른 강의가 없습니다.</div>
    }
  </ul>
)

export default MyLikeList
