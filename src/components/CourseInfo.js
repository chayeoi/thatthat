import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 2em;
`

const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto !important;
`

const CourseInfo = ({ content }) => (
  <Wrapper>
    <CenterBox>
      {content}
    </CenterBox>
  </Wrapper>
)

export default CourseInfo
