import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseInfo } from 'components'
import { loadCourseInfo } from 'ducks/modules/info'

class CourseInfoContainer extends Component {
  static defaultProps = {
    content: '',
    onMount: () => {},
  }
  componentDidMount() {
    const { courseKey } = this.props.match.params
    this.props.onMount(courseKey)
  }

  render() {
    const { content } = this.props
    return (
      <CourseInfo content={content} />
    )
  }
}

export default connect(
  state => ({
    content: state.info.content,
  }),
  dispatch => ({
    onMount: courseKey => dispatch(loadCourseInfo(courseKey)),
  }),
)(CourseInfoContainer)
