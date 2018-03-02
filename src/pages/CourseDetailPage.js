import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import {
  MainMenuContainer,
  CourseSummaryInfoContainer,
  CourseTabContainer,
  CourseInfoContainer,
  CourseReviewContainer,
} from 'containers'
import { initializeForm } from 'ducks/modules/form'

class CourseDetailPage extends Component {
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    const { match: { params: { courseKey } }, location: { pathname } } = this.props
    return (
      <React.Fragment>
        <MainMenuContainer />
        <CourseSummaryInfoContainer courseKey={courseKey} />
        <CourseTabContainer courseKey={courseKey} pathName={pathname} />
        <Switch>
          <Route exact path="/course/:courseKey" render={() => <Redirect to={`/course/${courseKey}/info`} />} />
          <Route path="/course/:courseKey/info" component={CourseInfoContainer} />
          <Route path="/course/:courseKey/review" component={CourseReviewContainer} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    onMount: () => dispatch(initializeForm()),
  }),
)(CourseDetailPage)
