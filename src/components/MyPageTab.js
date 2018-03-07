import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import * as color from '../constants/color'

const TabBox = styled(Menu)`
  width: 100%;
  height: 40px;
  margin: 0 !important;
  background-color: #fff !important;
`

const TabItem = styled(Menu.Item)`
  color: ${color.GRAY6} !important;
  border: 0;
  &.active {
    color: ${color.MAIN_COLOR} !important;
    border-color: ${color.MAIN_COLOR} !important;
  }
`

export default class MyPageTab extends Component {
  state = {
    activeItem: this.props.pathName,
  }

  componentWillReceiveProps(nextProps) {
    const { pathName: current } = this.props
    const { pathName: next } = nextProps
    if (current !== next) {
      this.setState({ activeItem: next })
    }
  }

  handleClick = (e, { to }) => {
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
              onClick={this.handleClick}
              {...tab.link}
            />
          ))}
        </TabBox>
      </div>
    )
  }
}
