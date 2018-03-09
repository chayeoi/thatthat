import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Sticky } from 'semantic-ui-react'
import {
  MainMenuContainer,
  CourseSummaryInfoContainer,
  CourseTabContainer,
  CourseInfoContainer,
  CourseReviewContainer,
} from 'containers'
import { withUser } from 'hocs'
import { initializeForm } from 'ducks/modules/form'
import { GRAY2 } from 'constants/color'

const WideRail = styled.div`
  width: 100%;
  height: 100% !important;
  min-height: 100vh !important;
  position: relative;
  top: 0;
  background-color: ${GRAY2};
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

class CourseDetailPage extends Component {
  state = {}

  componentDidMount() {
    this.props.onMount()
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    const { userClass, match: { params: { courseKey } }, location: { pathname } } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>IT 학원 강의 리뷰 플랫폼, 댓댓 - 강의 정보</title>
        </Helmet>
        <div ref={this.handleContextRef}>
          <WideRail>
            <Top className="top">
              <MainMenuContainer />
              <CourseSummaryInfoContainer courseKey={courseKey} />
              <Sticky context={contextRef} style={{ position: 'relative', zIndex: 10 }}>
                <CourseTabContainer courseKey={courseKey} pathName={pathname} />
              </Sticky>
            </Top>
            <Switch>
              <Route
                exact
                path="/course/:courseKey"
                render={() => <Redirect to={`/course/${courseKey}/info`} />}
              />
              <Route
                path="/course/:courseKey/info"
                component={CourseInfoContainer}
              />
              <Route
                path="/course/:courseKey/review"
                render={({ match }) => <CourseReviewContainer userClass={userClass} match={match} />}
              />
            </Switch>
          </WideRail>
        </div>
      </React.Fragment>
    )
  }
}

export default withUser(connect(
  null,
  dispatch => ({
    onMount: () => dispatch(initializeForm()),
  }),
)(CourseDetailPage))
