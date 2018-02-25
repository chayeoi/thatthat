import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseCard } from 'components'
import { loadCourse } from 'ducks/modules/detail'

class CourseCardContainer extends Component {
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
        : <CourseCard course={course} />
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
)(CourseCardContainer)
