import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'
import {
  MainMenuContainer,
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import styled from 'styled-components'
import { withUser } from 'hocs'

const WideRail = styled.div`
  width: 100%;
  height: 100% !important;
  min-height: 100vh !important;
  position: relative;
  top: 0;
`

class CoursePage extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    const { userClass, location: { pathname } } = this.props

    return (
      <div ref={this.handleContextRef}>
        <WideRail className="rail">
          <MainMenuContainer />
          <Sticky context={contextRef} style={{ position: 'relative', zIndex: 9999 }}>
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
