import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  // CourseCard,
  CourseTab,
  CourseInfo,
  CourseReview,
} from 'components'

class CourseDetailContainer extends Component {
  componentDidMount(){
    console.log(this.props.match.params.id, this.props.match.params.tab);
  }
  render() {
    return (
      <React.Fragment>
        코스 디테일 컨테이너
        {/* <CourseCard /> */}
        <CourseTab />
        <CourseInfo />
        <CourseReview />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({}),
  null
)(CourseDetailContainer)
