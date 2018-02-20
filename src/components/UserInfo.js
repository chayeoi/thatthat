import React from 'react'
import { Image } from 'semantic-ui-react'

const UserInfo = ({
  currentUser: {
    photoURL,
    displayName,
    email,
  },
}) => (
  <div>
    <Image src={photoURL} size="mini" circular />
    <span>{displayName}</span>
    <span>{email}</span>
  </div>
)

export default UserInfo
