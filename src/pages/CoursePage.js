import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  MainMenuContainer,
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import { withAuth } from 'hocs'

const CoursePage = () => (
  <React.Fragment>
    <MainMenuContainer />
    <CategoryTabContainer />
    <Switch>
      <Route exact path="/courses" component={CourseListContainer} />
      <Route path="/courses/:category" component={CourseListContainer} />
    </Switch>
  </React.Fragment>
)

export default withAuth(CoursePage)
