import React from 'react'
import { Link } from 'react-router-dom'
import { MyPageTab } from 'components'

const lists = [
  {
    name: '좋아요',
    link: {
      as: Link,
      to: '/mypage/likes',
    },
  },
  {
    name: '리뷰',
    link: {
      as: Link,
      to: '/mypage/reviews',
    },
  },
]

const MyPageTabContainer = () => (
  <MyPageTab lists={lists} />
)

export default MyPageTabContainer
