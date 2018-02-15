import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CategoryList } from 'components'

const links = [
  {
    as: Link,
    to: '/programming',
  },
  {
    as: Link,
    to: '/design',
  },
  {
    as: Link,
    to: '/plan-making',
  },
]

const categories = [
  '전체',
  '프로그래밍',
  '디자인',
  '기획',
  '마케팅',
]

class CategoryListContainer extends Component {
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

export default connect(
  state => ({}),
  dispatch => ({}),
)(CategoryListContainer)
