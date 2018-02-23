import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'
import { MAIN_COLOR } from 'constants/color'

const Wrapper = styled.div`
  text-align: center;
  background-color: ${MAIN_COLOR};
`
const MainMenu = () => (
  <Wrapper>
    <Menu secondary inverted>
      <Menu.Item
        name="댓댓"
        as={Link}
        to="/"
      />
      <Menu.Item
        name="messages"
        position="right"
        as={Link}
        to="/mypage"
      >
        <Icon name="user" />
      </Menu.Item>
    </Menu>
  </Wrapper>
)

export default MainMenu
