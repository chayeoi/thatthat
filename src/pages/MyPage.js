import React from 'react'
import { MainMenu } from 'components'
import {
  UserInfoContainer,
  LogoutButtonContainer,
  MyPageTabContainer,
} from 'containers'
import { withAuth } from 'hocs'

const MyPage = () => (
  <React.Fragment>
    <MainMenu />
    <UserInfoContainer />
    <LogoutButtonContainer />
    <MyPageTabContainer />
  </React.Fragment>
)

export default withAuth(MyPage)
