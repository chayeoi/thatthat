import React, { Component } from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

const Wrapper = styled.div`
  text-align: center;
`

const categories = [
  '전체',
  '프로그래밍',
  '디자인',
  '기획',
  '마케팅',
]

export default class Category extends Component {
  state = { activeItem: 'home' }

  handleCategoryClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Wrapper>
        <Menu pointing secondary color="red">
          {categories.map(category => (
            <Menu.Item
              key={category}
              name={category}
              active={activeItem === category}
              onClick={this.handleCategoryClick}
            />
          ))}
        </Menu>
      </Wrapper>
    )
  }
}
