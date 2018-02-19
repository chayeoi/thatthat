import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CourseList } from 'components'
import { loadCourseList } from 'ducks/modules/category'

class CourseListContainer extends Component {
  static defaultProps = {
    courses: [],
    onMount: () => {},
  }
  // XXX: 특정 카테고리를 클릭했을 때 각 카테고리에 맞는 새 데이터를 불러오지 못하고 있다.
  componentDidMount() {
    this.props.onMount()
  }

  // componentWillReceiveProps(nextProps) {
  //   nextProps.onMount()
  // }

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
  (dispatch, ownProps) => {
    const { category } = ownProps.match.params || ''
    return {
      onMount: () => dispatch(loadCourseList(category)),
    }
  },
)(CourseListContainer)
