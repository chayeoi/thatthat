import React from 'react'
import styled from 'styled-components'
import { Rating } from 'semantic-ui-react'

const Heart = styled(Rating)`
  &.ui.heart.rating .icon {
    width: auto !important;
  }
`

const LikeButton = () => (
  <Heart icon="heart" clearable size="large" />
)

export default LikeButton
