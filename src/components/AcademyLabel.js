import React from 'react'
import styled from 'styled-components'
import { Label } from 'semantic-ui-react'
import { SUB_COLOR } from 'constants/color'

const StyledLabel = styled(Label)`
  position: absolute !important;
  top: 1rem;
  right: 1rem;
  font-size: 11px !important;
  color: #fff !important;
  font-weight: 600 !important;
  background-color: ${SUB_COLOR} !important;
`

const AcademyLabel = () => (
  <StyledLabel as="div" tag>교육 기관</StyledLabel>
)

export default AcademyLabel
