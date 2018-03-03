import React from 'react'
import { storiesOf } from '@storybook/react'
import ReviewForm from '../src/components/ReviewForm'

storiesOf('ReviewForm', module)
  .add('default', () => (
    <ReviewForm />
  ))
