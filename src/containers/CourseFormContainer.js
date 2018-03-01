import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { CourseForm } from 'components'
import { registerCourse } from 'ducks/modules/form'

class CourseFormContainer extends Component {
  render() {
    const { isCompleted, courseKey, ...rest } = this.props
    return (
      isCompleted ?
        <Redirect to={`/course/${courseKey}`} />
        : <CourseForm {...rest} />
    )
  }
}

export default connect(
  state => ({
    isCreating: state.form.isCreating,
    isCompleted: state.form.isCompleted,
    courseKey: state.form.courseKey,
    errorMessage: state.form.errorMessage,
  }),
  dispatch => ({
    onSubmit: input => dispatch(registerCourse(input)),
  }),
)(CourseFormContainer)
