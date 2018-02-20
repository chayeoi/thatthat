import React, { Component } from 'react'
import * as firebase from 'firebase'
import { UserInfo } from 'components'

export default class UserInfoContainer extends Component {
  render() {
    const { currentUser } = firebase.auth()
    return (
      <UserInfo currentUser={currentUser} />
    )
  }
}

