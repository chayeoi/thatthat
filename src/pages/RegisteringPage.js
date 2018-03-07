import React from 'react'
import { Helmet } from 'react-helmet'
import { MainMenuContainer, RegisterFormContainer } from 'containers'

const RegisteringPage = () => (
  <React.Fragment>
    <Helmet>
      <title>IT 학원 강의 리뷰 플랫폼, 댓댓 - 교육기관 전환 신청</title>
    </Helmet>
    <MainMenuContainer />
    <RegisterFormContainer />
  </React.Fragment>
)

export default RegisteringPage
