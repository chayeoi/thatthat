import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Form,
  Dropdown,
  Message,
  Button,
  Modal,
} from 'semantic-ui-react'
import * as color from '../constants/color'

const categories = [
  { key: 'programming', value: 'programming', text: '프로그래밍' },
  { key: 'design', value: 'design', text: '디자인' },
  { key: 'planMaking', value: 'planMaking', text: '기획' },
  { key: 'marketing', value: 'marketing', text: '마케팅' },
]

const Wrapper = styled.ul`
  padding: 1.2rem 1rem;
  min-height: 100vh;
  background-color: ${color.GRAY2};
`

const CourseInput = styled(Form.Input)`
  margin-bottom: 12px;
  caret-color: ${color.MAIN_COLOR};
  & label {
    font-size: 13px;
    margin-bottom: 4px;
    color: #495057 !important;
  }
  & input {
    border-top: 1px solid ${color.GRAY4} !important;
    border-left: 1px solid ${color.GRAY4} !important;
    border-right: none !important;
    border-bottom: none !important;
  }
  `

const CourseCategoryLabel = styled.label`
  margin-bottom: 4px !important;
  display: block;
  font-weight: 700;
  font-size: 13px;
  color: #495057 !important;
  `

const CourseCategory = styled(Dropdown)`
  margin-bottom: 1rem;
  border-color: white;
  caret-color: ${color.MAIN_COLOR};
  & input {
    border-top: 1px solid ${color.GRAY4} !important;
    border-left: 1px solid ${color.GRAY4} !important;
    border-right: none !important;
    border-bottom: none !important;
  }
  `

const CourseDesc = styled(Form.TextArea)`
  border-radius: 1.5rem !important;
  caret-color: ${color.MAIN_COLOR};
  & label {
    font-size: 13px;
    margin-bottom: 4px;
    color: #495057 !important;
  }
  & textarea {
    border-top: 1px solid ${color.GRAY4} !important;
    border-left: 1px solid ${color.GRAY4} !important;
    border-right: none !important;
    border-bottom: none !important;
  }
`

const FormButton = styled(Button)`
  width: 100%;
  color: white !important;
  background-color: ${color.GRAY6} !important;
  font-weight: 300 !important;
  &:hover {
    background-color: ${color.GRAY7} !important;
  }
`

export default class CourseForm extends Component {
  static defaultProps = {
    isCreating: false,
    errorMessage: '',
    onSubmit: () => {},
  }

  state = {
    courseName: '',
    category: '',
    image: {},
    content: '',
    open: false,
  }

  handleChange = (e, { name, value }) => {
    if (name === 'image') {
      const [image] = e.target.files
      this.setState({
        [name]: image,
      })
    } else {
      this.setState({
        [name]: value,
      })
    }
  }

  handleClick = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  handleSubmit = () => {
    this.setState({ open: false })
    this.props.onSubmit(this.state)
  }

  render() {
    const {
      courseName,
      category,
      image,
      content,
      open,
    } = this.state
    const { isCreating, errorMessage } = this.props
    return (
      <React.Fragment>
        <Wrapper>
          <Form loading={isCreating}>
            <CourseInput id="courseName" name="courseName" value={courseName} label="강의명" onChange={this.handleChange} />
            <CourseCategoryLabel htmlFor="courseCategory">강의 분류</CourseCategoryLabel>
            <CourseCategory
              id="courseCategory"
              name="category"
              value={category}
              placeholder="프로그래밍"
              labeled
              fluid
              search
              selection
              options={categories}
              onChange={this.handleChange}
            />
            <CourseInput id="courseImage" type="file" name="image" files={image} label="강의 사진" onChange={this.handleChange} fluid />
            <CourseDesc id="courseDesc" name="content" value={content} label="강의 소개" onChange={this.handleChange} rows="3" />
            <FormButton content="등록하기" onClick={this.handleClick} />
            <Modal dimmer="inverted" open={open} onClose={this.handleClose}>
              <Modal.Header content="강의 등록" />
              <Modal.Content content="작성하신 내용으로 강의를 등록하시겠습니까?" />
              <Modal.Actions>
                <Button content="취소" onClick={this.handleClose} />
                <Button content="등록" onClick={this.handleSubmit} />
              </Modal.Actions>
            </Modal>
          </Form>
          {
            errorMessage && (
              <Message negative>
                <Message.Header>강의 등록에 실패하였습니다.</Message.Header>
                <p>{errorMessage}</p>
              </Message>
            )
          }
        </Wrapper>
      </React.Fragment>
    )
  }
}
