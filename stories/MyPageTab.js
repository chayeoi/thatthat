import React from 'react'
import { storiesOf } from '@storybook/react'
import MyPageTab from '../src/components/MyPageTab'

const reviewerTabs = [
  {
    name: '좋아요',
    link: {
      as: 'a',
      to: '/mypage/likes',
    },
  },
  {
    name: '리뷰',
    link: {
      as: 'a',
      to: '/mypage/reviews',
    },
  },
]
const academyTabs = [
  {
    name: '등록한 강의',
    link: {
      as: 'a',
      to: '/mypage/courses',
    },
  },
  {
    name: '강의 등록',
    link: {
      as: 'a',
      to: '/mypage/new-course',
    },
  },
]

storiesOf('MyPageTab', module)
  .add('Reviewer', () => (
    <MyPageTab tabs={reviewerTabs} />
  ))
  .add('Academy', () => (
    <MyPageTab tabs={academyTabs} />
  ))
