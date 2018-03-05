import React from 'react'
import {
  MainMenuContainer,
  UserInfoContainer,
  LogoutButtonContainer,
  MyPageTabContainer,
  ReviewerRoute,
  AcademyRoute,
} from 'containers'
import { withUser } from 'hocs'

const MyPage = ({ userClass = '', location: { pathname } }) => (
  <React.Fragment>
    <MainMenuContainer />
    <UserInfoContainer userClass={userClass} />
    <LogoutButtonContainer />
    <MyPageTabContainer userClass={userClass} pathName={pathname} />
    {userClass === 'reviewer' ? <ReviewerRoute /> : <AcademyRoute />}
  </React.Fragment>
)

export default withUser(MyPage)
