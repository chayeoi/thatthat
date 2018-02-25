import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyCourseList } from 'components'
import { loadMyCourseList } from 'ducks/modules/course'

class MyCourseListContainer extends Component {
  static defaultProps = {
    courses: [],
    onMount: () => { },
  }

  render() {
    const { courses } = this.props
    return (
      <MyCourseList courses={courses} />
    )
  }
}

export default connect(
  state => ({
    courses: state.course.courses,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyCourseList()),
  }),
)(MyCourseListContainer)
