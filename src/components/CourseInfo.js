import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
`

const CourseInfo = ({ content }) => (
  <Wrapper>
    {content}
  </Wrapper>
)

export default CourseInfo
