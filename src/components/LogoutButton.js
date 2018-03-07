import React from 'react'
import styled from 'styled-components'
import { MAIN_COLOR } from '../constants/color'

const Wrapper = styled.div`
  width: 100%;
  background-color: #fff !important;
`

const RoundedButton = styled.button`
  display: block;
  padding: .2rem 1.5rem; 
  margin: 1rem auto 0;
  font-weight: bold;
  color: ${MAIN_COLOR};
  border: 1.5px solid ${MAIN_COLOR};
  border-radius: 1.5rem;
  &:hover {
    background-color: ${MAIN_COLOR};
    color: white;
  }
  &:before {
    margin-right: 5px;
    font-weight: normal;
  }
`

const LogoutButton = ({ onLogout }) => (
  <Wrapper>
    <RoundedButton onClick={onLogout} className="icon-off" >로그아웃</RoundedButton>
  </Wrapper>
)

export default LogoutButton
