import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseList } from 'components'
import { loadCourseList } from 'ducks/modules/category'

class CourseListContainer extends Component {
  static defaultProps = {
    courses: [],
    onMount: () => {},
  }

  componentDidMount() {
    const { category } = this.props.match.params
    this.props.onMount(category)
  }

  componentWillReceiveProps(nextProps) {
    const { url: currentUrl } = this.props.match
    const { url: nextUrl } = nextProps.match
    if (currentUrl !== nextUrl) {
      const category = nextProps.match.params.category || ''
      this.props.onMount(category)
    }
  }

  render() {
    const { courses } = this.props
    return (
      <React.Fragment>
        <CourseList courses={courses} />
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({
    courses: state.category.courses,
  }),
  dispatch => ({
    onMount: (category) => {
      dispatch(loadCourseList(category))
    },
  }),
)(CourseListContainer)
