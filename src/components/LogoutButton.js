import React from 'react'
import styled from 'styled-components'
import { MAIN_COLOR } from '../constants/color'

const RoundedButton = styled.button`
  display: block;
  margin: 0 auto;
  font-weight: bold;
  color: ${MAIN_COLOR};
  border: 1.5px solid ${MAIN_COLOR};
  border-radius: 1.5rem;
  padding: .2rem 1.5rem;
  margin-top: 15px;
  &:hover {
    background-color: ${MAIN_COLOR};
    color: white;
  }
`

const LogoutButton = ({ onLogout }) => (
  <RoundedButton onClick={onLogout}>로그아웃</RoundedButton>
)

export default LogoutButton
