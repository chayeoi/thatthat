import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { LoginButtonContainer } from 'containers'
import { loginBg } from 'assets/videos'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #ff3333;
  }
`

const TopMarginedHeader = styled(Header)`
  margin-top: 3rem !important;
  font-size: 4em !important;
  font-weight: normal;
`

const CenteredGrid = styled(Grid)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100%;
  overflow: hidden;
`

const BackgroundVideo = styled.video`
  height: 150%;
`

const LoginPage = () => (
  <Wrapper>
    <TopMarginedHeader
      as="h1"
      content="댓댓"
      inverted
      textAlign="center"
    />
    <CenteredGrid centered container>
      <Grid.Column>
        <LoginButtonContainer />
      </Grid.Column>
    </CenteredGrid>
    <VideoWrapper>
      <BackgroundVideo id="background-video" loop autoPlay>
        <source src={loginBg} type="video/mp4" />
        <source src={loginBg} type="video/ogg" />
      </BackgroundVideo>
    </VideoWrapper>
  </Wrapper>
)

export default LoginPage
