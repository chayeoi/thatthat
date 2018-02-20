import React from 'react'
import { MainMenu } from 'components'
import {
  UserInfoContainer,
  LogoutButtonContainer,
} from 'containers'
import { withAuth } from 'hocs'

const MyPage = () => (
  <React.Fragment>
    <MainMenu />
    <UserInfoContainer />
    <LogoutButtonContainer />
  </React.Fragment>
)

export default withAuth(MyPage)
