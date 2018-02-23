import React from 'react'
import { storiesOf } from '@storybook/react'
import MyPageTab from '../src/components/MyPageTab'

storiesOf('MyPageTab', module)
  .add('default', () => (
    <MyPageTab />
  ))
