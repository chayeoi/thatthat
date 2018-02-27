import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  MyLikeListContainer,
  MyReviewListContainer,
} from 'containers'

const ReviewerRoute = () => (
  <React.Fragment>
    <Route exact path="/mypage" render={() => <Redirect to="/mypage/likes" />} />
    <Route path="/mypage/likes" component={MyLikeListContainer} />
    <Route path="/mypage/reviews" component={MyReviewListContainer} />
  </React.Fragment>
)

export default ReviewerRoute
