import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'
import * as color from '../constants/color'

const RegisterAcademyButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px !important;
  font-weight: bold !important;
  color: ${color.SUB_COLOR} !important;
  padding: .2rem .5rem !important;
  border: 1.5px solid ${color.SUB_COLOR} !important;
  border-radius: 3px !important;
  background-color: #fff !important;
  &:hover {
    color: #fff !important;
    background-color: ${color.SUB_COLOR} !important;
  }
`
const UserLevel = ({ link }) => (
  <RegisterAcademyButton {...link}>교육기관 등록</RegisterAcademyButton>
)

export default UserLevel
