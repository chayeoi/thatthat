import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import * as color from '../constants/color'

const TabBox = styled(Menu)`
  background-color: #fff !important;
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

export default class CategoryTab extends Component {
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
      <TabBox pointing secondary widths={5}>
        {categories.map(category => (
          <TabItem
            key={category.name}
            name={category.name}
            active={activeItem === category.link.to}
            onClick={this.handleClick}
            {...category.link}
          />
        ))}
      </TabBox>
    )
  }
}
