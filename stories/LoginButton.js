import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import LoginButton from '../src/components/LoginButton'

storiesOf('LoginButton', module)
  .add('default', () => (
    <LoginButton />
  ))
