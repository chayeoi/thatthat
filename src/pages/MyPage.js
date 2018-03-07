import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Sticky } from 'semantic-ui-react'
import {
  MainMenuContainer,
  UserInfoContainer,
  LogoutButtonContainer,
  MyPageTabContainer,
  ReviewerRoute,
  AcademyRoute,
} from 'containers'
import { withUser } from 'hocs'
import * as color from '../constants/color'

const WideRail = styled.div`
  width: 100%;
  height: 100% !important;
  min-height: 100vh !important;
  top: 0;
  background-color: ${color.GRAY2};
`

const User = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 3rem 1rem 2rem;
  background-color: #fff;
`

const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto;
`

class MyPage extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    const { userClass, location: { pathname } } = this.props

    return (
      <React.Fragment>
        <Helmet>
          <title>IT 학원 강의 리뷰 플랫폼, 댓댓 - 마이페이지</title>
        </Helmet>
        <div ref={this.handleContextRef}>
          <WideRail>
            <MainMenuContainer />
            <User>
              <CenterBox>
                <UserInfoContainer userClass={userClass} />
                <LogoutButtonContainer />
              </CenterBox>
            </User>
            <Sticky context={contextRef} style={{ position: 'relative', zIndex: 10 }}>
              <MyPageTabContainer userClass={userClass} pathName={pathname} />
            </Sticky>
            {userClass === 'reviewer' ? <ReviewerRoute /> : <AcademyRoute />}
          </WideRail>
        </div>
      </React.Fragment>
    )
  }
}

export default withUser(MyPage)
