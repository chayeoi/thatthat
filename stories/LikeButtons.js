import React from 'react'
import { storiesOf } from '@storybook/react'
import LikeButton from '../src/components/LikeButton'

storiesOf('LikeButton', module)
  .add('default', () => (
    <LikeButton />
  ))
