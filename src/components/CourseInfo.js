import React from 'react'
import styled from 'styled-components'
import * as color from '../constants/color'

const Wrapper = styled.ul`
  padding: 1em;
  min-height: 100vh;
  background-color: ${color.GRAY2};
`

const CourseInfo = ({ content }) => (
  <Wrapper>
    {content}
  </Wrapper>
)

export default CourseInfo
