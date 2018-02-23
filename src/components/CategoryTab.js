import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class CategoryList extends Component {
  state = {
    activeItem: this.props.categories[0].name,
  }

  handleClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    const { categories } = this.props
    return (
      <div>
        <Menu pointing secondary color="red">
          {categories.map(category => (
            <Menu.Item
              key={category.name}
              name={category.name}
              active={activeItem === category.name}
              onClick={this.handleClick}
              {...category.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
