import React from 'react'
import { storiesOf } from '@storybook/react'
import MainMenu from '../src/components/MainMenu'

const links = {
  home: {
    as: 'a',
    to: '/',
  },
  myPage: {
    as: 'a',
    to: '/mypage',
  },
}

storiesOf('MainPage', module)
  .add('default', () => (
    <MainMenu links={links} />
  ))
