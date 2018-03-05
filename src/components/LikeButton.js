import React from 'react'
import styled from 'styled-components'
import { Rating } from 'semantic-ui-react'
import * as color from '../constants/color'

const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  text-align: right;
  font-size: 10px;
  color: ${color.GRAY5};
  &:hover {
    color: ${color.MAIN_COLOR} !important;
  }
`

const Heart = styled(Rating)`
  font-size: 14px !important;
  &.ui.heart.rating .icon {
    width: auto !important;
  }
`

const LikeButton = ({ likeCount, myLike }) => (
  <Wrapper title="좋아요" >{likeCount} <Heart icon="heart" rating={myLike} /></Wrapper>
)

export default LikeButton
