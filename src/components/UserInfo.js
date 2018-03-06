import React from 'react'
import styled from 'styled-components'
import * as font from '../constants/font'

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 50px 1rem 0;
`

const UserName = styled.div`
  color: ${font.TITLE.color};
  font-size: ${font.TITLE.size};
  font-weight: ${font.TITLE.weight};
`
const SquareImageBox = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  padding-top: 100px;
`

const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`

const UserInfo = ({
  currentUser: {
    photoURL,
    displayName,
    email,
  },
  render,
}) => (
  <Wrapper>
    {/* <Image src={photoURL} size="mini" circular /> */}
    <SquareImageBox>
      <ProfileImage src={photoURL} />
    </SquareImageBox>
    <UserName>{displayName}</UserName>
    <div>{email}</div>
    {render()}
  </Wrapper>
)

export default UserInfo
