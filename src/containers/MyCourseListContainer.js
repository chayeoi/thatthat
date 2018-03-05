import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyCourseList } from 'components'
import { loadMyCourseList } from 'ducks/modules/myCourse'

class MyCourseListContainer extends Component {
  static defaultProps = {
    courses: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { courses } = this.props
    return (
      <MyCourseList courses={courses} />
    )
  }
}

export default connect(
  ({ myCourse }) => ({
    courses: myCourse.courses,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyCourseList()),
  }),
)(MyCourseListContainer)
