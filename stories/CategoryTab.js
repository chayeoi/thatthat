import React from 'react'
import { storiesOf } from '@storybook/react'
import CategoryTab from '../src/components/CategoryTab'

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

storiesOf('CategoryTab', module)
  .add('default', () => (
    <CategoryTab categories={categories} />
  ))
