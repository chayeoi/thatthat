import React, { Component } from 'react'
import { CourseList } from 'components'

export default class CourseListContainer extends Component {
  render() {
    const { category } = this.props.match.params
    return (
      <div>
        <h1>{category}</h1>
        <CourseList />
      </div>
    )
  }
}
