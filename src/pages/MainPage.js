import React from 'react'
import { Route } from 'react-router-dom'
import {
  CategoryListContainer,
  CourseListContainer,
} from 'containers'

const MainPage = () => (
  <React.Fragment>
    <CategoryListContainer />
    <Route exact path="/" component={CourseListContainer} />
    <Route path="/courses/:category" component={CourseListContainer} />
  </React.Fragment>
)

export default MainPage
