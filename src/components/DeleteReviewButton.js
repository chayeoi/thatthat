import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class DeleteReviewButton extends Component {
  static defaultProps = {
    onDelete: () => {},
  }

  handleClick = () => this.props.onDelete()
  render() {
    return (
      <Button content="삭제" onClick={this.handleClick} />
    )
  }
}
