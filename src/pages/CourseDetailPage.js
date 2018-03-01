import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import {
  MainMenuContainer,
  CourseSummaryInfoContainer,
  CourseTabContainer,
  CourseInfoContainer,
  CourseReviewContainer,
} from 'containers'

const CourseDetailPage = ({ match: { params: { courseKey } } }) => (
  <React.Fragment>
    <MainMenuContainer />
    <CourseSummaryInfoContainer courseKey={courseKey} />
    <CourseTabContainer courseKey={courseKey} />
    <Switch>
      <Route exact path="/course/:courseKey" render={() => <Redirect to={`/course/${courseKey}/info`} />} />
      <Route path="/course/:courseKey/info" component={CourseInfoContainer} />
      <Route path="/course/:courseKey/review" component={CourseReviewContainer} />
    </Switch>
  </React.Fragment>
)

export default CourseDetailPage
