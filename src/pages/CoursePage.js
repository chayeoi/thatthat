import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Rail, Sticky } from 'semantic-ui-react'
import {
  MainMenuContainer,
  CategoryTabContainer,
  CourseListContainer,
} from 'containers'
import styled from 'styled-components'
import { withUser } from 'hocs'

const WideRail = styled(Rail)`
  width: 100% !important;
  height: 3000px !important;
`

const LongGrid = styled.div`
  height: 3000px !important;
  background-color: yellow;
`

class CoursePage extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    const { userClass, location: { pathname } } = this.props

    return (
      <div ref={this.handleContextRef}>
        <LongGrid>
          <WideRail>
            <MainMenuContainer />
            <Sticky context={contextRef} style={{position: 'relative', zIndex: 9999}}>
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
        </LongGrid>
      </div>
    )
  }
}

export default withUser(CoursePage)
