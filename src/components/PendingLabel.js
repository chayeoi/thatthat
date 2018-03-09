import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import { GRAY } from 'constants/color'

const StyledLabel = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px !important;
  font-weight: bold !important;
  color: ${GRAY} !important;
  padding: .2rem .5rem !important;
  border: 1.5px solid ${GRAY} !important;
  border-radius: 3px !important;
  background-color: #fff !important;
  cursor: default;
`
const PendingLabel = () => (
  <StyledLabel>
    <Icon name="refresh" />
    교육기관 심사 중
  </StyledLabel>
)

export default PendingLabel
