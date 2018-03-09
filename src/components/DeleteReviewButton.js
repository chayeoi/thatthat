import React, { Component } from 'react'
import styled from 'styled-components'
import { DEEP_GRAY, BLACK } from 'constants/color'

const DeleteButton = styled.button`
  position: absolute;
  top: -7px;
  right: -5px;
  padding: 5px;
  color: ${DEEP_GRAY};
  &:hover {
    color: ${BLACK};
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
        onClick={this.handleClick}
      />
    )
  }
}
