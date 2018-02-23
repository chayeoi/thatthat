import React from 'react'
import { Link } from 'react-router-dom'
import { CourseTab } from 'components'

const tabs = [
  {
    name: '강의정보',
    link: {
      as: Link,
      to: '/course/:id/info',
    },
  },
  {
    name: '강의리뷰',
    link: {
      as: Link,
      to: '/course/:id/review',
    },
  },
]

const CoureseTabContainer = () => (
  <CourseTab tabs={tabs} />
)

export default CoureseTabContainer
