import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import {
  MainMenu,
  CourseCard,
} from 'components'
import {
  CourseTabContainer,
  CourseInfoContainer,
  CourseReviewContainer,
} from 'containers'

const CourseDetailPage = () => (
  <React.Fragment>
    <MainMenu />
    <CourseCard />
    <CourseTabContainer />
    <Switch>
      <Route exact path="course/:id" render={() => <Redirect to="/courses/:id/info" />} />
      <Route path="course/:id/info" component={CourseInfoContainer} />
      <Route path="course/:id/review" component={CourseReviewContainer} />
    </Switch>
    강의 상세페이지
  </React.Fragment>
)

export default CourseDetailPage
