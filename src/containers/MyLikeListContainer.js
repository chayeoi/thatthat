import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MyLikeList } from 'components'
import { withLoading } from 'hocs'
import { loadMyLikeList } from 'ducks/modules/myLike'

const MyLikeListWithLoading = withLoading(MyLikeList)
class MyLikeListContainer extends Component {
  static defaultProps = {
    isLoading: false,
    likes: [],
    onMount: () => {},
  }

  componentDidMount() {
    this.props.onMount()
  }

  render() {
    const { onMount, ...props } = this.props
    return (
      <MyLikeListWithLoading {...props} />
    )
  }
}

export default connect(
  ({ myLike }) => ({
    isLoading: myLike.isLoading,
    likes: myLike.likes,
  }),
  dispatch => ({
    onMount: () => dispatch(loadMyLikeList()),
  }),
)(MyLikeListContainer)
