import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {
  CategoryListContainer,
  CourseListContainer,
} from 'containers'
import { MainMenu } from 'components'

const MainPage = () => (
  <React.Fragment>
    <MainMenu />
    <CategoryListContainer />
    <Switch>
      <Route exact path="/" component={CourseListContainer} />
      <Route path="/courses/:category" component={CourseListContainer} />
    </Switch>
  </React.Fragment>
)

export default MainPage
