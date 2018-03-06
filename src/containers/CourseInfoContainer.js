import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseInfo } from 'components'
import { withLoading } from 'hocs'
import { loadCourseInfo } from 'ducks/modules/info'

const CourseInfoWithLoading = withLoading(CourseInfo)
class CourseInfoContainer extends Component {
  static defaultProps = {
    isLoading: false,
    content: '',
    onMount: () => {},
  }
  componentDidMount() {
    const { courseKey } = this.props.match.params
    this.props.onMount(courseKey)
  }

  render() {
    const { onMount, ...props } = this.props
    return (
      <CourseInfoWithLoading {...props} />
    )
  }
}

export default connect(
  ({ info }) => ({
    isLoading: info.isLoading,
    content: info.content,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourseInfo(courseKey)),
  }),
)(CourseInfoContainer)
