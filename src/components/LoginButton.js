import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 450px;
`
const PaddedWrapper = styled.div`
  padding: 10px 20px;
`

const RoughButton = styled(Button)`
  border-radius: 0 !important;
`

const LoginButton = ({ onFacebookLogin, onTwitterLogin, onGoogleLogin }) => (
  <Wrapper>
    <PaddedWrapper>
      <RoughButton fluid color="blue" onClick={onFacebookLogin}>
        <Icon name="facebook" /> Facebook 로그인
      </RoughButton>
    </PaddedWrapper>
    <PaddedWrapper>
      <RoughButton fluid color="teal" onClick={onTwitterLogin}>
        <Icon name="twitter" /> Twitter 로그인
      </RoughButton>
    </PaddedWrapper>
    <PaddedWrapper>
      <RoughButton fluid color="red" onClick={onGoogleLogin}>
        <Icon name="google plus" /> Google 로그인
      </RoughButton>
    </PaddedWrapper>
  </Wrapper>
)

export default LoginButton
