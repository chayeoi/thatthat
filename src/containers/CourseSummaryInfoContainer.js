import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseSummaryInfo } from 'components'
import { loadCourse } from 'ducks/modules/detail'

class CourseSummaryInfoContainer extends Component {
  static defaultProps = {
    course: {},
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount()
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
  (dispatch, ownProps) => ({
    onMount: () => dispatch(loadCourse(ownProps.courseKey)),
  }),
)(CourseSummaryInfoContainer)
