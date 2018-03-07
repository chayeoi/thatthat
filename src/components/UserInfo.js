import React from 'react'
import styled from 'styled-components'
import * as font from '../constants/font'

`

const UserName = styled.div`
  color: ${font.TITLE.color};
  font-size: ${font.TITLE.size};
  font-weight: ${font.TITLE.weight};
`

`
const UserInfo = ({
  currentUser: {
    photoURL,
    displayName,
    email,
  },
  render,
}) => (
    <UserName>{displayName}</UserName>
    <div>{email}</div>
    {render()}
)

export default UserInfo
