import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseSummaryInfo } from 'components'
import { loadCourse } from 'ducks/modules/detail'

class CourseSummaryInfoContainer extends Component {
  static defaultProps = {
    courseKey: '',
    userClass: '',
    isLoading: false,
    course: {},
    onMount: () => {},
  }

  componentDidMount() {
    const { courseKey } = this.props
    this.props.onMount(courseKey)
  }

  render() {
    const { course, userClass } = this.props
    return (
      <CourseSummaryInfo course={course} userClass={userClass} />
    )
  }
}

export default connect(
  ({ detail }) => ({
    isLoading: detail.isLoading,
    course: detail.course,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourse(courseKey)),
  }),
)(CourseSummaryInfoContainer)
