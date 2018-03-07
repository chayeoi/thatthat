import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initializeUser } from 'ducks/modules/user'
import { Grid, Header } from 'semantic-ui-react'
import styled from 'styled-components'
import { LoginButtonContainer, FooterContainer } from 'containers'
import { firstItem, secondItem, thirdItem } from 'assets/images'
import { FONT_COLOR } from 'constants/color'

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.2;
  }
`

const itemStyle = `
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-size: cover;
`

const FirstItem = styled.div`
  background: papayawhip url(${firstItem}) no-repeat;
  ${itemStyle}
  opacity: ${props => (props.active === 'one' ? 1 : 0)};
  transition: opacity 1s;
`

const SecondItem = styled.div`
  background: olivedrab url(${secondItem}) no-repeat;
  ${itemStyle}
  opacity: ${props => (props.active === 'two' ? 1 : 0)};
  transition: opacity 1s;
`

const ThirdItem = styled.div`
  background: goldenrod url(${thirdItem}) no-repeat;
  ${itemStyle}
  opacity: ${props => (props.active === 'three' ? 1 : 0)};
  transition: opacity 1s;
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

class LoginPage extends Component {
  state = {
    active: 'one',
  }

  componentDidMount() {
    this.props.onMount()
    this.timerID = setInterval(() => this.fade(), 3000)
  }

  comonentWillUnmount() {
    clearInterval(this.timerID)
  }

  fade = () => this.setState((prevState) => {
    if (prevState.active === 'one') {
      return {
        active: 'two',
      }
    } else if (prevState.active === 'two') {
      return {
        active: 'three',
      }
    }
    return {
      active: 'one',
    }
  })

  render() {
    const { active } = this.state
    return (
      <Wrapper>
        <FirstItem active={active} />
        <SecondItem active={active} />
        <ThirdItem active={active} />
        <ContentWrapper>
          <header>
            <MainHeader as="h1" content="THATTHAT" textAlign="center" />
            <SubHeader as="h2" content="IT 학원 강의 리뷰 플랫폼, 댓댓" textAlign="center" />
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
  }
}

export default connect(
  null,
  dispatch => ({
    onMount: () => dispatch(initializeUser()),
  }),
)(LoginPage)
