import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Category from '../src/components/Category'

storiesOf('Category', module)
  .add('default', () => (
    <Category />
  ))
