import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MyPageTab extends Component {
  state = {
    activeItem: this.props.lists[0].name,
  }

  handleTabClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state
    const { lists } = this.props
    return (
      <div>
        <Menu pointing secondary color="red">
          {lists.map(list => (
            <Menu.Item
              key={list.name}
              name={list.name}
              active={activeItem === list.name}
              onClick={this.handleTabClick}
              {...list.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
