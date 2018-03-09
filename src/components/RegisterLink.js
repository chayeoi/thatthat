import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'semantic-ui-react'
import { SUB_COLOR } from 'constants/color'

const StyledButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 11px !important;
  font-weight: bold !important;
  color: ${SUB_COLOR} !important;
  padding: .3rem .5rem !important;
  border: 1px solid ${SUB_COLOR} !important;
  border-radius: 3px !important;
  background-color: #fff !important;
  &:hover {
     color: #fff !important;
     background-color: ${SUB_COLOR} !important;
   }
`
const RegisterLink = ({ link }) => (
  <StyledButton {...link}>
    <Icon name="file text outline" />
    교육기관 등록
  </StyledButton>
)

export default RegisterLink
