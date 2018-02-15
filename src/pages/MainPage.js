import React from 'react'
import { Route } from 'react-router-dom'
import {
  CategoryListContainer,
  CourseListContainer,
} from 'containers'

const MainPage = () => (
  <div>
    <CategoryListContainer />
    <Route exact path="/" component={CourseListContainer} />
    <Route path="/programming" component={CourseListContainer} />
    <Route path="/design" component={CourseListContainer} />
  </div>
)

export default MainPage
