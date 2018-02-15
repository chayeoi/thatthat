import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CategoryList from '../src/components/CategoryList'

const categories = [
  {
    name: '전체',
    link: {
      as: 'a',
      to: '/',
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
    name: '기획',
    link: {
      as: 'a',
      to: '/courses/planMaking',
    },
  },
]

storiesOf('CategoryList', module)
  .add('default', () => (
    <CategoryList
      categories={categories}
    />
  ))
