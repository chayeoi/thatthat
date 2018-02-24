import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class CourseTab extends Component {
  state = {
    activeItem: this.props.tabs[0].name,
  }

  handleTabClick = (e, { name }) => {
    this.setState({ activeItem: name })
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
              active={activeItem === tab.name}
              onClick={this.handleTabClick}
              {...tab.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
