import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MainMenu } from 'components'
import {
  UserInfoContainer,
  LogoutButtonContainer,
  MyPageTabContainer,
  MyLikeListContainer,
  MyReviewListContainer,
} from 'containers'
import { withAuth } from 'hocs'

const MyPage = () => (
  <React.Fragment>
    <MainMenu />
    <UserInfoContainer />
    <LogoutButtonContainer />
    <MyPageTabContainer />
    <Switch>
      <Route exact path="/mypage" render={() => <Redirect to="/mypage/likes" />} />
      <Route path="/mypage/likes" component={MyLikeListContainer} />
      <Route path="/mypage/reviews" component={MyReviewListContainer} />
    </Switch>
  </React.Fragment>
)

export default withAuth(MyPage)
