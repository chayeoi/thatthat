import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CategoryList } from 'components'

const categories = [
  {
    name: '전체',
    link: {
      as: Link,
      to: '/',
    },
  },
  {
    name: '프로그래밍',
    link: {
      as: Link,
      to: '/programming',
    },
  },
  {
    name: '디자인',
    link: {
      as: Link,
      to: '/design',
    },
  },
  {
    name: '기획',
    link: {
      as: Link,
      to: '/plan-making',
    },
  },
]

export default class CategoryListContainer extends Component {
  state = { activeItem: 'home' }

  handleCategoryClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    return (
      <CategoryList
        onCategoryClick={this.handleCategoryClick}
        activeItem={activeItem}
        categories={categories}
      />
    )
  }
}
