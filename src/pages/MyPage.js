import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import {
  MainMenuContainer,
  UserInfoContainer,
  LogoutButtonContainer,
  MyPageTabContainer,
  ReviewerRoute,
  AcademyRoute,
} from 'containers'
import { requestAuthentication } from 'ducks/modules/user'

class MyPage extends Component {
  static defaultProps = {
    isLoading: false,
    userClass: '',
    redirectToLogin: false,
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const {
      isLoading,
      userClass,
      redirectToLogin,
      location: { pathname },
    } = this.props
    if (isLoading) {
      return <Loader />
    } else if (redirectToLogin) {
      return <Redirect to="/login" />
    } else if (userClass !== '') {
      return (
        <React.Fragment>
          <MainMenuContainer />
          <UserInfoContainer />
          <LogoutButtonContainer />
          <MyPageTabContainer userClass={userClass} pathName={pathname} />
          {userClass === 'reviewer' ? <ReviewerRoute /> : <AcademyRoute />}
        </React.Fragment>
      )
    }
    return null
  }
}

export default connect(
  state => ({
    isLoading: state.user.isLoading,
    userClass: state.user.userClass,
    redirectToLogin: state.user.redirectToLogin,
  }),
  dispatch => ({
    onMount: () => dispatch(requestAuthentication()),
  }),
)(MyPage)
