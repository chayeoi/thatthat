import React, { Component } from 'react'
import { Form, Dropdown, Message } from 'semantic-ui-react'

const categories = [
  { key: 'programming', value: 'programming', text: '프로그래밍' },
  { key: 'design', value: 'design', text: '디자인' },
  { key: 'planMaking', value: 'planMaking', text: '기획' },
  { key: 'marketing', value: 'marketing', text: '마케팅' },
]

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

  handleSubmit = () => {
    this.props.onSubmit(this.state)
  }

  render() {
    const {
      courseName,
      category,
      image,
      content,
    } = this.state
    const { isCreating, errorMessage } = this.props
    return (
      <React.Fragment>
        <Form loading={isCreating}>
          <Form.Input name="courseName" value={courseName} label="강의명" onChange={this.handleChange} />
          <Dropdown name="category" value={category} labeled placeholder="카테고리" fluid search selection options={categories} onChange={this.handleChange} />
          <Form.Input type="file" name="image" files={image} label="강의 사진" onChange={this.handleChange} fluid />
          <Form.TextArea name="content" value={content} label="강의 소개" onChange={this.handleChange} rows="10" />
          <Form.Button onClick={this.handleSubmit}>등록하기</Form.Button>
        </Form>
        {
          errorMessage && (
            <Message negative>
              <Message.Header>강의 등록에 실패하였습니다.</Message.Header>
              <p>{errorMessage}</p>
            </Message>
          )
        }
            <label htmlFor="courseCategory">강의 분류</label>
            <Category id="courseCategory" name="category" value={category} placeholder="프로그래밍" labeled="true" fluid search selection options={categories} onChange={this.handleChange} />
      </React.Fragment>
    )
  }
}
