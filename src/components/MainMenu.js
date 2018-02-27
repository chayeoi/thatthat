import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'
import { MAIN_COLOR } from 'constants/color'

const Wrapper = styled.div`
  text-align: center;
  background-color: ${MAIN_COLOR};
`
const MainMenu = ({ links }) => (
  <Wrapper>
    <Menu secondary inverted>
      <Menu.Item
        name="댓댓"
        {...links.home}
      />
      <Menu.Item
        name="messages"
        position="right"
        {...links.myPage}
      >
        <Icon name="user" />
      </Menu.Item>
    </Menu>
  </Wrapper>
)

export default MainMenu
