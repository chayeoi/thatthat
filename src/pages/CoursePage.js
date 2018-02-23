import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainMenu } from 'components'
import {
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import { withAuth } from 'hocs'

const CoursePage = () => (
  <React.Fragment>
    <MainMenu />
    <CategoryTabContainer />
    <Switch>
      <Route exact path="/courses" component={CourseListContainer} />
      <Route path="/courses/:category" component={CourseListContainer} />
    </Switch>
  </React.Fragment>
)

export default withAuth(CoursePage)
