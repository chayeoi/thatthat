import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  MainMenuContainer,
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import { withUser } from 'hocs'

const CoursePage = ({ userClass, location: { pathname } }) => (
  <React.Fragment>
    <MainMenuContainer />
    <CategoryTabContainer pathName={pathname} />
    <Switch>
      <Route
        exact
        path="/courses"
        render={({ match }) => <CourseListContainer match={match} userClass={userClass} />}
      />
      <Route
        path="/courses/:category"
        render={({ match }) => <CourseListContainer match={match} userClass={userClass} />}
      />
    </Switch>
  </React.Fragment>
)

export default withUser(CoursePage)
