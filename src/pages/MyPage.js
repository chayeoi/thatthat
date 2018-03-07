import React from 'react'
import { Helmet } from 'react-helmet'
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
    <Helmet>
      <title>IT 학원 강의 리뷰 플랫폼, 댓댓 - 마이페이지</title>
    </Helmet>
    <MainMenuContainer />
    <UserInfoContainer userClass={userClass} />
    <LogoutButtonContainer />
    <MyPageTabContainer userClass={userClass} pathName={pathname} />
    {userClass === 'reviewer' ? <ReviewerRoute /> : <AcademyRoute />}
  </React.Fragment>
)

export default withUser(MyPage)
