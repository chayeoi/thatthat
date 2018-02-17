import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { LoginButtonContainer } from 'containers'
import { loginBg } from 'assets/img'

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

const LoginPage = () => (
  <Wrapper>
    <TopMarginedHeader
      as="h1"
      content="ThatThat"
      inverted
      textAlign="center"
    />
    <CenteredGrid centered container>
      <Grid.Column>
        <LoginButtonContainer />
      </Grid.Column>
    </CenteredGrid>
  </Wrapper>
)

export default LoginPage
