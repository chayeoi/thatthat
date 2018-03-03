import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, TextArea, Rating } from 'semantic-ui-react'

const StyledRating = styled(Rating)`
  &.active::before {
    color: #f8ba00;
  }
`

const MaxHeightTextArea = styled(TextArea)`
  max-height: 75px;
`

export default class ReviewForm extends Component {
  static defaultProps = {
    isCreating: false,
    onSubmit: () => {},
  }

  state = {
    rating: 1,
    content: '',
  }

  handleRate = (e, { rating }) => this.setState({ rating })

  handleChange = (e, { value }) => this.setState({ content: value })

  handleClick = () => this.state.content && this.props.onSubmit(this.state, this.props.courseKey)

  render() {
    const { content } = this.state
    const { isCreating } = this.props
    return (
      <Form loading={isCreating}>
        <StyledRating icon="star" maxRating={5} onRate={this.handleRate} />
        <MaxHeightTextArea autoHeight rows={1} value={content} onChange={this.handleChange} />
        <Form.Button onClick={this.handleClick}>등록</Form.Button>
      </Form>
    )
  }
}
