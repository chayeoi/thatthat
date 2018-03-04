import React from 'react'
import styled from 'styled-components'
import * as color from '../constants/color'

const RegisterAcademyButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px;
  font-weight: bold;
  color: ${color.SUB_COLOR};
  padding: .2rem .5rem;
  border: 1.5px solid ${color.SUB_COLOR};
  border-radius: 3px;
  &:hover{
    color: white;
    background-color: ${color.SUB_COLOR};
  }
`
const UserLevel = () => (
  <RegisterAcademyButton>교육기관 등록</RegisterAcademyButton>
)

export default UserLevel
