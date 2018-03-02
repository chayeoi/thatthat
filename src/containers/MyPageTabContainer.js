import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MyPageTab } from 'components'

const reviewerTabs = [
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
const academyTabs = [
  {
    name: '등록한 강의',
    link: {
      as: Link,
      to: '/mypage/courses',
    },
  },
  {
    name: '강의 등록',
    link: {
      as: Link,
      to: '/mypage/new-course',
    },
  },
]

const MyPageTabContainer = ({ userClass, pathName }) => (
  <MyPageTab tabs={userClass === 'reviewer' ? reviewerTabs : academyTabs} pathName={pathName} />
)

export default connect(
  state => ({
    userClass: state.user.userClass,
  }),
  null,
)(MyPageTabContainer)
