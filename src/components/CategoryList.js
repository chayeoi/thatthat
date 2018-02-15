import React from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

const Wrapper = styled.div`
  text-align: center;
`

const CategoryList = ({ onCategoryClick, activeItem, categories }) => (
  <Wrapper>
    <Menu pointing secondary color="red">
      {categories.map(category => (
        <Menu.Item
          key={category.name}
          name={category.name}
          active={activeItem === category.name}
          onClick={onCategoryClick}
          {...category.link}
        />
      ))}
    </Menu>
  </Wrapper>
)

export default CategoryList
