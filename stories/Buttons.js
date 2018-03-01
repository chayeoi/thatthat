import React from 'react'
import { storiesOf } from '@storybook/react'
import LoginButton from '../src/components/LoginButton'
import LogoutButton from '../src/components/LogoutButton'
import LikeButton from '../src/components/LikeButton'

storiesOf('Buttons', module)
  .add('LoginButton', () => (
    <LoginButton />
  ))
  .add('LogoutButton', () => (
    <LogoutButton />
  ))
  .add('LikeButton', () => (
    <LikeButton />
  ))
