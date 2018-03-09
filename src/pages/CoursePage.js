import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Sticky } from 'semantic-ui-react'
import {
  MainMenuContainer,
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import { withUser } from 'hocs'
import { LIGHTER_GRAY } from 'constants/color'

const WideRail = styled.div`
  width: 100%;
  height: 100% !important;
  min-height: 100vh !important;
  position: relative;
  top: 0;
  background-color: ${LIGHTER_GRAY};
`

class CoursePage extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    const { userClass, location: { pathname } } = this.props

    return (
      <div ref={this.handleContextRef}>
        <Helmet>
          <title>IT 학원 강의 리뷰 플랫폼, 댓댓 - 강의 목록</title>
        </Helmet>
        <WideRail className="rail">
          <MainMenuContainer />
          <Sticky context={contextRef} style={{ position: 'relative', zIndex: 10 }}>
            <CategoryTabContainer pathName={pathname} />
          </Sticky>
          <Switch>
            <Route
              exact
              path="/courses"
              render={({ match }) => <CourseListContainer userClass={userClass} match={match} />}
            />
            <Route
              path="/courses/:category"
              render={({ match }) => <CourseListContainer userClass={userClass} match={match} />}
            />
          </Switch>
        </WideRail>
      </div>
    )
  }
}

export default withUser(CoursePage)
