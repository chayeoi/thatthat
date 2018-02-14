import React from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

const categories = [
  '전체',
  '프로그래밍',
  '디자인',
  '기획',
  '마케팅',
]

const Wrapper = styled.div`
  text-align: center;
`

const Category = ({ onCategoryClick, activeItem }) => (
  <Wrapper>
    <Menu pointing secondary color="red">
      {categories.map(category => (
        <Menu.Item
          key={category}
          name={category}
          active={activeItem === category}
          onClick={onCategoryClick}
        />
      ))}
    </Menu>
  </Wrapper>
)

export default Category
