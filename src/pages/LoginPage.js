import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { LoginButton } from 'components'
import { loginBg } from 'assets/img'

const Wrapper = styled.div`
  height: 100vh;
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
// XXX: Header에 margin-top을 설정함으로써 Wrapper가 하단으로 밀려나는 문제 수정 요망
const TopMarginedHeader = styled(Header)`
  margin-top: 3rem !important;
  margin-bottom: -3rem !important;
  font-size: 4em !important;
  font-weight: normal;
`

const CenteredGrid = styled(Grid)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export default class LoginPage extends Component {
  render() {
    return (
      <Wrapper>
        <TopMarginedHeader
          as="h1"
          content="ThatThat"
          inverted
          textAlign="center"
        />
        <CenteredGrid columns={3} doubling centered divided container>
          <Grid.Column>
            <LoginButton />
          </Grid.Column>
        </CenteredGrid>
      </Wrapper>
    )
  }
}
