import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class CategoryList extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  handleClick = (e, { to }) => {
    this.setState({ activeItem: to })
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
              active={activeItem === category.link.to}
              onClick={this.handleClick}
              {...category.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
