import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MyPageTab extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  handleClick = (e, { to }) => {
    this.setState({ activeItem: to })
  }

  render() {
    const { activeItem } = this.state
    const { tabs } = this.props
    return (
      <div>
        <Menu pointing secondary color="red">
          {tabs.map(tab => (
            <Menu.Item
              key={tab.name}
              name={tab.name}
              active={activeItem === tab.link.to}
              onClick={this.handleClick}
              {...tab.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
