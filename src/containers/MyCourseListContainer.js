import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyCourseList } from 'components'
import { withLoading } from 'hocs'
import { loadMyCourseList } from 'ducks/modules/myCourse'

const MyCourseListWithLoading = withLoading(MyCourseList)
class MyCourseListContainer extends Component {
  static defaultProps = {
    isLoading: false,
    courses: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { onMount, ...props } = this.props
    return (
      <MyCourseListWithLoading {...props} />
    )
  }
}

export default connect(
  ({ myCourse }) => ({
    isLoading: myCourse.isLoading,
    courses: myCourse.courses,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyCourseList()),
  }),
)(MyCourseListContainer)
