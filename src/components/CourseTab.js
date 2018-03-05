import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import * as color from '../constants/color'

const TabBox = styled(Menu)`
  margin-top: .5rem;
  height: 40px;
`

const TabItem = styled(Menu.Item)`
  color: ${color.GRAY6} !important;
  border: 0;
  &.active {
    color: ${color.MAIN_COLOR} !important;
    border-color: ${color.MAIN_COLOR} !important;
  }
`

export default class CourseTab extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  handleTabClick = (e, { to }) => {
    this.setState({ activeItem: to })
  }

  render() {
    const { activeItem } = this.state
    const { tabs } = this.props
    return (
      <div>
        <TabBox pointing secondary widths={2}>
          {tabs.map(tab => (
            <TabItem
              key={tab.name}
              name={tab.name}
              active={activeItem === tab.link.to}
              onClick={this.handleTabClick}
              {...tab.link}
            />
          ))}
        </TabBox>
      </div>
    )
  }
}
