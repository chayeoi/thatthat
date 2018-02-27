import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {
  MyCourseListContainer,
  CourseFormContainer,
} from 'containers'

const ReviewerRoute = () => (
  <React.Fragment>
    <Route exact path="/mypage" render={() => <Redirect to="/mypage/courses" />} />
    <Route path="/mypage/courses" component={MyCourseListContainer} />
    <Route path="/mypage/new-course" component={CourseFormContainer} />
  </React.Fragment>
)

export default ReviewerRoute
