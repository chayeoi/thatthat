import React from 'react'
import styled from 'styled-components'
import { Label } from 'semantic-ui-react'
import { SUB_COLOR } from 'constants/color'

const StyledLabel = styled(Label)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px !important;
  font-weight: bold !important;
  color: ${SUB_COLOR} !important;
  padding: .2rem .5rem !important;
  border: 1.5px solid ${SUB_COLOR} !important;
  border-radius: 3px !important;
  background-color: #fff !important;
  &:hover {
    color: #fff !important;
    background-color: ${SUB_COLOR} !important;
  }
`

const AcademyLabel = () => (
  <StyledLabel basic>
      교육 기관
  </StyledLabel>
)

export default AcademyLabel
