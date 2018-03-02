import React from 'react'
import styled from 'styled-components'
import { Menu, Icon } from 'semantic-ui-react'
import { MAIN_COLOR } from '../constants/color'

const Wrapper = styled.header`
  background-color: ${MAIN_COLOR};
`
const MenuBox = styled(Menu)`
  height: 44px !important;
  background-color: transparent !important;
  `
const Logo = styled.h1`
  font-family: 'Spoqa Han Sans', sans-serif;
  font-weight: 900;
  font-size: 22px;
`
const MypageIcon = styled.i`
  font-size: 19px;
  font-family: fontello;
`

const MainMenu = ({ links }) => (
  <Wrapper>
    <MenuBox inverted>
      <Menu.Item {...links.home}>
        <Logo>댓댓</Logo>
      </Menu.Item>
      <Menu.Item {...links.myPage} position="right" >
        <MypageIcon className="icon-user-outline" />
      </Menu.Item>
    </MenuBox>
  </Wrapper>
)

export default MainMenu
