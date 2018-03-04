import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

export default class RegisterForm extends Component {
  state = {
    organization: '',
    image: {},
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

  render() {
    const { organization, image } = this.state
    return (
      <div>
        <Form loading={false}>
          <Form.Input
            name="organization"
            value={organization}
            label="기관명"
            onChange={this.handleChange}
          />
          <Form.Input
            type="file"
            name="image"
            files={image}
            label="사업자 등록증"
            onChange={this.handleChange}
          />
          <Form.Button onClick={this.handleSubmit}>등록하기</Form.Button>
        </Form>
      </div>
    )
  }
}
