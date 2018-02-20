import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const RoundedButton = styled(Button)`
  border-radius: 16px !important;
  padding: .5em 2em !important;
`

const LogoutButton = ({ onLogout }) => (
  <RoundedButton
    basic
    color="red"
    content="로그아웃"
    onClick={onLogout}
  />
)

export default LogoutButton
