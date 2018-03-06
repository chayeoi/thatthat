import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, TextArea, Rating, Icon } from 'semantic-ui-react'
import * as color from '../constants/color'

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 10px 1rem;
  box-shadow: 0 -5px 10px -2px rgba(0,0,0,.12);
  background-color: white;
`

// const StyledRating = styled(Rating)`
//   display: block !important;
//   text-align: center;
//   margin-top: 5px;
//   font-size: 1rem !important;
// `

const MaxHeightTextArea = styled(TextArea)`
  display: inline-block;
  width: calc(100% - 30px) !important;
  max-height: 75px;
  padding: .7rem 1.1rem;
  border: none !important;
  border-radius: 1.5rem !important;
  background-color: ${color.GRAY1} !important;
  caret-color: ${color.MAIN_COLOR};
`

const FormButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: inline-block;
  width: 30px;
  margin: 0;
  color: #ced4da;
  font-size: 1.2rem;
  font-weight: normal;
  text-align: right;
  background-color: white;
  &:hover {
    color: ${color.MAIN_COLOR};
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
          {/* <StyledRating
            icon="star"
            rating={rating}
            maxRating={5}
            onRate={this.handleRate}
          /> */}
          <label htmlFor="comment" className="readable-hidden" >리뷰작성</label>
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
        </Form>
      </Wrapper>
    )
  }
}
