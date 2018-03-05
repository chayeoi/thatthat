import React from 'react'
import * as firebase from 'firebase'
import { UserLabelContainer } from 'containers'
import { UserInfo } from 'components'

const UserInfoContainer = ({ userClass }) => {
  const { currentUser } = firebase.auth()
  return (
    <UserInfo
      currentUser={currentUser}
      render={() => <UserLabelContainer userClass={userClass} />}
    />
  )
}

export default UserInfoContainer
