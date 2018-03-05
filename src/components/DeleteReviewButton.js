import React, { Component } from 'react'
import styled from 'styled-components'
import { GRAY5, GRAY9 } from '../constants/color'

const DeleteButton = styled.button`
  position: absolute;
  top: -7px;
  right: -5px;
  padding: 5px;
  color: ${GRAY5};
  &:hover {
    color: ${GRAY9};
  }
`

export default class DeleteReviewButton extends Component {
  static defaultProps = {
    onDelete: () => {},
  }

  handleClick = () => this.props.onDelete()
  render() {
    return (
      <DeleteButton
        className="icon-trash-empty"
        type="button"
        value="리뷰 삭제"
        title="리뷰 삭제"
      />
    )
  }
}
