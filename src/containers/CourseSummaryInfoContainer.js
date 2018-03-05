import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Loader } from 'semantic-ui-react'
import styled from 'styled-components'
import { CourseSummaryInfo } from 'components'
import { loadCourse } from 'ducks/modules/detail'

const LoaderBox = styled.div`
  min-height:135px;
  vertical-align: center;
`

class CourseSummaryInfoContainer extends Component {
  static defaultProps = {
    course: {},
    onMount: () => {},
  }
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { isLoading, course, userClass } = this.props
    return (
      isLoading ?
        // <div>로딩 중</div>
        <LoaderBox><Loader active size="large">Loading</Loader></LoaderBox>
        : <CourseSummaryInfo course={course} userClass={userClass} />
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
