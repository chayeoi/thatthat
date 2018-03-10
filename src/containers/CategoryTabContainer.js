import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryTab } from 'components'

const categories = [
  { name: '전체', link: { as: Link, to: '/courses' } },
  { name: '프로그래밍', link: { as: Link, to: '/courses/programming' } },
  { name: '디자인', link: { as: Link, to: '/courses/design' } },
  { name: '기획', link: { as: Link, to: '/courses/planMaking' } },
  { name: '영상', link: { as: Link, to: '/courses/visualArts' } },
]

const CategoryTabContainer = ({ pathName }) => (
  <CategoryTab categories={categories} pathName={pathName} />
)

export default CategoryTabContainer
