import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class CourseTab extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  handleTabClick = (e, { to }) => {
    this.setState({ activeItem: to })
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary color="red">
          {tabs.map(tab => (
            <Menu.Item
              key={tab.name}
              name={tab.name}
              active={activeItem === tab.link.to}
              onClick={this.handleTabClick}
              {...tab.link}
            />
          ))}
        </Menu>
      </div>
    )
  }
}
