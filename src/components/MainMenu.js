import React from 'react'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'
import { MAIN_COLOR } from '../constants/color'

const Wrapper = styled.header`
  width: 100%;
  background-color: ${MAIN_COLOR};
`

const MenuBox = styled(Menu)`
  max-width: 768px;
  height: 44px !important;
  margin: 0 auto !important;
  background-color: transparent !important;
`

const Logo = styled.h1`
  font-weight: 900;
  font-size: 22px;
`
const MypageIcon = styled.i`
  font-size: 19px;
`

const MainMenu = ({ links }) => (
  <Wrapper>
    <MenuBox inverted>
      <Menu.Item {...links.home}>
        <span className="readable-hidden">홈으로 이동</span>
        <Logo>댓댓</Logo>
      </Menu.Item>
      <Menu.Item {...links.myPage} position="right">
        <span className="readable-hidden">마이페이지로 이동</span>
        <MypageIcon className="icon-user-outline" />
      </Menu.Item>
    </MenuBox>
  </Wrapper>
)

export default MainMenu
