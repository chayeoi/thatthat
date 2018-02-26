import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import {
  MainMenu,
} from 'components'
import {
  CourseCardContainer,
  CourseTabContainer,
  CourseInfoContainer,
  CourseReviewContainer,
} from 'containers'

const CourseDetailPage = ({ match: { params: { courseKey } } }) => (
  <React.Fragment>
    <MainMenu />
    <CourseCardContainer courseKey={courseKey} />
    <CourseTabContainer courseKey={courseKey} />
    <Switch>
      <Route exact path="/course/:courseKey" render={() => <Redirect to={`/courses/${courseKey}/info`} />} />
      <Route path="/course/:courseKey/info" component={CourseInfoContainer} />
      <Route path="/course/:courseKey/review" component={CourseReviewContainer} />
    </Switch>
  </React.Fragment>
)

export default CourseDetailPage
