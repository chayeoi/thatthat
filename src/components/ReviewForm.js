import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, TextArea, Rating } from 'semantic-ui-react'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  width: 100%;
`

const StyledRating = styled(Rating)`
  display: block !important;
  margin-top: 5px;
  font-size: 1rem !important;
  &.active::before, &.selected::before {
    color: black !important;
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
    rating: 0,
    content: '',
  }

  componentWillReceiveProps(nextProps) {
    const { isCreating: current } = this.props
    const { isCreating: next } = nextProps
    if (current !== next) {
      this.setState({
        rating: 0,
        content: '',
      })
    }
  }

  handleRate = (e, { rating }) => this.setState({ rating })

  handleChange = (e, { value }) => this.setState({ content: value })

  handleClick = () => this.state.content && this.props.onSubmit(this.state, this.props.courseKey)

  render() {
    const { rating, content } = this.state
    const { isCreating } = this.props
    return (
      <Wrapper>
        <Form loading={isCreating}>
          <StyledRating icon="star" rating={rating} maxRating={5} onRate={this.handleRate} />
          <label htmlFor="comment">
            <MaxHeightTextArea
              id="comment"
              autoHeight
              rows={1}
              value={content}
              placeholder="강의리뷰를 입력하세요..."
              onChange={this.handleChange}
            />
          </label>
          <Form.Button onClick={this.handleClick}>등록</Form.Button>
        </Form>
      </Wrapper>
    )
  }
}
