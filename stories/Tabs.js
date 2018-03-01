import React from 'react'
import { storiesOf } from '@storybook/react'
import CategoryTab from '../src/components/CategoryTab'
import MyPageTab from '../src/components/MyPageTab'

const categories = [
  {
    name: '전체',
    link: {
      as: 'a',
      to: '/courses',
    },
  },
  {
    name: '프로그래밍',
    link: {
      as: 'a',
      to: '/courses/programming',
    },
  },
  {
    name: '디자인',
    link: {
      as: 'a',
      to: '/courses/design',
    },
  },
  {
    name: '마케팅',
    link: {
      as: 'a',
      to: '/courses/marketing',
    },
  },
  {
    name: '영상',
    link: {
      as: 'a',
      to: '/courses/video',
    },
  },
]

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

storiesOf('Tabs', module)
  .add('CategoryTab', () => (
    <CategoryTab categories={categories} />
  ))
  .add('MyPageTab_Reviewer', () => (
    <MyPageTab tabs={reviewerTabs} />
  ))
  .add('MyPageTab_Academy', () => (
    <MyPageTab tabs={academyTabs} />
  ))
