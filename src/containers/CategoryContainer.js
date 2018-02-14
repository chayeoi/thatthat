import React, { Component } from 'react'
import { Category } from 'components'

export default class CategoryContainer extends Component {
  state = { activeItem: 'home' }
  handleCategoryClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Category
        onCategoryClick={this.handleCategoryClick}
        activeItem={activeItem}
      />
    )
  }
}
