import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RegisterLink, PendingLabel, AcademyLabel } from 'components'
import { checkRegisteringReq } from 'ducks/modules/label'

const link = {
  as: Link,
  to: '/registering',
}

class UserLabelContainer extends Component {
  static defaultProps = {
    userClass: '',
    onMount: () => {},
  }

  componentDidMount() {
    const { userClass } = this.props
    if (userClass === 'reviewer') {
      this.props.onMount()
    }
  }

  render() {
    const { userClass, isPending } = this.props
    if (userClass === 'academy') {
      return <AcademyLabel />
    } else if (isPending) {
      return <PendingLabel />
    }
    return <RegisterLink link={link} />
  }
}

export default connect(
  ({ label }) => ({
    isLoading: label.isLoading,
    isPending: label.isPending,
  }),
  dispatch => ({
    onMount: () => dispatch(checkRegisteringReq()),
  }),
)(UserLabelContainer)
