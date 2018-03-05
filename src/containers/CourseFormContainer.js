import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { CourseForm } from 'components'
import { createCourse } from 'ducks/modules/form'

class CourseFormContainer extends Component {
  render() {
    const { completeCreating, courseKey, ...rest } = this.props
    return (
      completeCreating ?
        <Redirect to={`/course/${courseKey}`} />
        : <CourseForm {...rest} />
    )
  }
}

export default connect(
  ({ form }) => ({
    isCreating: form.isCreating,
    completeCreating: form.completeCreating,
    courseKey: form.courseKey,
    errorMessage: form.errorMessage,
  }),
  dispatch => ({
    onSubmit: input => dispatch(createCourse(input)),
  }),
)(CourseFormContainer)
