import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import {
  LoginButtonContainer,
  FooterContainer,
} from 'containers'
import { loginBg } from 'assets/images'
import { FONT_COLOR } from 'constants/color'

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
    background: #fff url(${loginBg}) no-repeat;
    background-size: cover;
  }
`

const ContentWrapper = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const MainHeader = styled(Header)`
  font-size: 4em !important;
  font-weight: normal;
  color: ${FONT_COLOR} !important;
`

const SubHeader = styled(Header)`
font-weight: 300 !important;
  color: ${FONT_COLOR} !important;
`

const TopMarginedGrid = styled(Grid)`
  margin-top: 3rem !important;
`

const LoginPage = () => (
  <Wrapper>
    <ContentWrapper>
      <header>
        <MainHeader as="h1" content="THATTHAT" textAlign="center" />
        <SubHeader as="h2" content="IT 학원 강의 리뷰 플랫폼" textAlign="center" />
      </header>
      <TopMarginedGrid centered container>
        <Grid.Column>
          <LoginButtonContainer />
        </Grid.Column>
      </TopMarginedGrid>
      <FooterContainer />
    </ContentWrapper>
  </Wrapper>
)

export default LoginPage
