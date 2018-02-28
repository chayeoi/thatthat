import React, { Component } from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

const categories = [
  { key: 'programming', value: 'programming', text: '프로그래밍' },
  { key: 'design', value: 'design', text: '디자인' },
  { key: 'planMaking', value: 'planMaking', text: '기획' },
  { key: 'marketing', value: 'marketing', text: '마케팅' },
]

export default class CourseForm extends Component {
  state = {
    title: '',
    category: '',
    content: '',
  }

  handleChange = (e, { name, value }) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const { title, content } = this.state
    return (
      <Form>
        <Form.Input name="title" value={title} label="제목" onChange={this.handleChange} />
        <Dropdown name="category" placeholder="카테고리" fluid search selection options={categories} onChange={this.handleChange} />
        <Form.TextArea name="content" value={content} label="강의 소개" onChange={this.handleChange} rows="5" />
        <Form.Button>등록하기</Form.Button>
      </Form>
    )
  }
}
