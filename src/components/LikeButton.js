import React, { Component } from 'react'
import styled from 'styled-components'
import { Rating } from 'semantic-ui-react'
import * as color from '../constants/color'

const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  /* width: 30px; */
  text-align: right;
  font-size: 10px;
  color: ${color.GRAY5};
  &:hover {
    color: ${color.MAIN_COLOR} !important;
  }
`

const Heart = styled(Rating)`
  font-size: 16px !important;
  &.ui.heart.rating .icon {
    width: auto !important;
  }
`

export default class LikeButton extends Component {
  static defaultProps = {
    likeCount: 0,
    myLike: 0,
    onLike: () => {},
  }

  handleRate = () => this.props.onLike()

  render() {
    const { likeCount, myLike } = this.props
    return (
      <Wrapper title="좋아요">
        {likeCount}
        <Heart
          icon="heart"
          defaultRating={myLike}
          onRate={this.handleRate}
        />
      </Wrapper>
    )
  }
}
