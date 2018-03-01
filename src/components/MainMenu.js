import React from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'
import { MAIN_COLOR } from '../constants/color'

const Wrapper = styled.header`
  /* height: 44px; */
  background-color: ${MAIN_COLOR};
`
const Logo = styled.h1`
  font-family: 'Spoqa Han Sans', sans-serif;
  font-weight: 900;
  font-size: 22px;
`
const MenuBox = styled(Menu)`
  height: 44px !important;
  background-color: transparent !important;
`

const MainMenu = ({ links }) => (
  <Wrapper>
    <MenuBox inverted>
      <Menu.Item {...links.home}>
        <Logo>댓댓</Logo>
      </Menu.Item>
      <Menu.Item {...links.myPage} position="right" >
        <Icon className="icon-user-outline" size="large" />
      </Menu.Item>
    </MenuBox>
  </Wrapper>
)

export default MainMenu
