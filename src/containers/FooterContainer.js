import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Footer } from 'components'
import { loadCourseCount } from 'ducks/modules/footer'

class FooterContainer extends Component {
  static defaultProps = {
    courseCount: 0,
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { courseCount } = this.props
    return (
      <Footer courseCount={courseCount} />
    )
  }
}

export default connect(
  ({ footer }) => ({
    courseCount: footer.courseCount,
  }),
  dispatch => ({
    onMount: () => dispatch(loadCourseCount()),
  }),
)(FooterContainer)
