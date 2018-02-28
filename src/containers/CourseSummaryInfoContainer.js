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
    const { isLoading, course } = this.props
    return (
      isLoading ?
        <div>로딩 중</div>
        : <CourseSummaryInfo course={course} />
    )
  }
}

export default connect(
  state => ({
    isLoading: state.detail.isLoading,
    course: state.detail.course,
  }),
  (dispatch, ownProps) => ({
    onMount: () => dispatch(loadCourse(ownProps.courseKey)),
  }),
)(CourseSummaryInfoContainer)
