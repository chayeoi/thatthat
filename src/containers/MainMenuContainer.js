import React from 'react'
import { Link } from 'react-router-dom'
import { MainMenu } from 'components'

const links = {
  home: { as: Link, to: '/' },
  myPage: { as: Link, to: '/mypage' },
}

const MainMenuContainer = () => (
  <MainMenu links={links} />
)

export default MainMenuContainer
