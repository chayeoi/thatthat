import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseList } from 'components'
import { LikeButtonContainer } from 'containers'
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
    const {
      courses,
      userClass,
      match: { params: { category } },
    } = this.props
    return (
      <React.Fragment>
        <CourseList
          courses={courses}
          userClass={userClass}
          render={props => <LikeButtonContainer category={category} {...props} />}
        />
      </React.Fragment>
    )
  }
}

export default connect(
  ({ category }) => ({
    courses: category.courses,
  }),
  dispatch => ({
    onMount: category => dispatch(loadCourseList(category)),
  }),
)(CourseListContainer)
