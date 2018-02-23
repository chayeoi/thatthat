import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainMenu } from 'components'
import { CourseDetailContainer } from 'containers'

const CourseDetailPage = (props) => {
  return <React.Fragment>
      <MainMenu />
    <CourseDetailContainer match={props.match} />
      강의 상세페이지
  </React.Fragment>
}

export default CourseDetailPage
