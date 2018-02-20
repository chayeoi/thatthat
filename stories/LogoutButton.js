import React from 'react'
import { storiesOf } from '@storybook/react'
import LogoutButton from '../src/components/LogoutButton'

storiesOf('LogoutButton', module)
  .add('default', () => (
    <LogoutButton />
  ))
