import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyLikeList } from 'components'
import { loadMyLikeList } from 'ducks/modules/like'

class MyLikeListContainer extends Component {
  static defaultProps = {
    likes: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { likes } = this.props
    return (
      <MyLikeList likes={likes} />
    )
  }
}

export default connect(
  state => ({
    likes: state.like.likes,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyLikeList()),
  }),
)(MyLikeListContainer)
