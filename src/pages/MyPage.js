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
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`

const MyPage = () => (
  <React.Fragment>
    <Wrapper>
      <MainMenu />
      <UserInfoContainer />
      <LogoutButtonContainer />
      <MyPageTabContainer />
      <Switch>
        <Route exact path="/mypage" render={() => <Redirect to="/mypage/likes" />} />
        <Route path="/mypage/likes" component={MyLikeListContainer} />
        <Route path="/mypage/reviews" component={MyReviewListContainer} />
      </Switch>
    </Wrapper>
  </React.Fragment>
)

export default withAuth(MyPage)
