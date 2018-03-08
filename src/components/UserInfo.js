import React from 'react'
import styled from 'styled-components'
import { Image } from 'semantic-ui-react'
import { TITLE, SUB_TITLE } from 'constants/font'

const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const UserName = styled.div`
  color: ${TITLE.color};
  font-size: ${TITLE.size};
  font-weight: ${TITLE.weight};
`

const UserEmail = styled.div`
  color: ${SUB_TITLE.color};
`
const UserInfo = ({
  currentUser: {
    photoURL,
    displayName,
    email,
  },
  render,
}) => (
  <CenterBox>
    <Image src={photoURL} size="tiny" circular />
    <UserName>{displayName}</UserName>
    <UserEmail>{email}</UserEmail>
    {render()}
  </CenterBox>
)

export default UserInfo
