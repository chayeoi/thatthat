import React from 'react'
import { Link } from 'react-router-dom'
import { CourseTab } from 'components'

const CourseTabContainer = ({ courseKey, pathName }) => {
  const tabs = [
    {
      name: '강의 정보',
      link: {
        as: Link,
        to: `/course/${courseKey}/info`,
      },
    },
    {
      name: '강의 리뷰',
      link: {
        as: Link,
        to: `/course/${courseKey}/review`,
      },
    },
  ]

  return (
    <CourseTab tabs={tabs} pathName={pathName} />
  )
}

export default CourseTabContainer
