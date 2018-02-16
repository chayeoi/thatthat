import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import CourseCard from '../src/components/CourseCard'

storiesOf('CourseCard', module)
  .add('default', () => (
    <CourseCard />
  ))
