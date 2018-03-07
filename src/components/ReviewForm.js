import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, TextArea, Modal, Button, Rating, Icon } from 'semantic-ui-react'
import * as color from '../constants/color'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 1rem;
  background-color: #c9cfd5;
`

const StyledRating = styled(Rating)`
  display: block !important;
  text-align: center;
  padding: 2rem 0 1rem;
  font-size: 2rem !important;
`

const MaxHeightTextArea = styled(TextArea)`
  display: inline-block;
  width: calc(100% - 30px) !important;
  max-height: 75px;
  padding: .7rem 1.1rem;
  border: none !important;
  border-radius: 1.5rem !important;
  background-color: #fff;
  caret-color: ${color.MAIN_COLOR};
`

const FormButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: inline-block;
  width: 30px;
  margin: 0;
  color: white;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: right;
  &:hover > i:before {
    content: "\f1d8"  !important;
  }
`

export default class ReviewForm extends Component {
  static defaultProps = {
    isCreating: false,
    onSubmit: () => {},
  }

  state = {
    rating: 0,
    content: '',
    open: false,
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

  handleChange = (e, { value }) => this.setState({ content: value })

  handleClick = () => {
    if (this.state.content) {
      this.setState({ open: true })
    }
  }

  handleClose = () => this.setState({ open: false })

  handleRate = (e, { rating }) => this.setState({ rating })

  handleSubmit = () => {
    const { courseKey } = this.props
    const { open, ...input } = this.state
    this.setState({ open: false })
    this.props.onSubmit(input, courseKey)
  }

  render() {
    const { rating, content, open } = this.state
    const { isCreating } = this.props
    return (
      <Wrapper>
        <Form loading={isCreating}>
          <label htmlFor="comment" className="readable-hidden">리뷰작성</label>
          <MaxHeightTextArea
            id="comment"
            rows={1}
            value={content}
            placeholder="강의리뷰를 입력하세요..."
            onChange={this.handleChange}
            autoHeight
            required
          />
          <FormButton onClick={this.handleClick} htmlRole="button">
            <Icon name="send outline" />
            <span className="readable-hidden">리뷰 등록</span>
          </FormButton>
          <Modal dimmer="inverted" open={open} onClose={this.handleClose}>
            <Modal.Header content="리뷰 등록" />
            <StyledRating
              icon="star"
              rating={rating}
              maxRating={5}
              onRate={this.handleRate}
            />
            <Modal.Content content="작성하신 내용으로 리뷰를 등록하시겠습니까?" />
            <Modal.Actions>
              <Button content="취소" onClick={this.handleClose} />
              <Button content="등록" onClick={this.handleSubmit} />
            </Modal.Actions>
          </Modal>
        </Form>
      </Wrapper>
    )
  }
}
