import React, { Component } from 'react'
import { Form, Modal, Message, Button } from 'semantic-ui-react'
  font-weight: 500 !important;

export default class RegisterForm extends Component {
  static defaultProps = {
    errorMessage: '',
    onSubmit: () => {},
  }

  state = {
    organization: '',
    image: {},
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
    const { organization, image } = this.state
    this.setState({ open: false })
    this.props.onSubmit({ organization, image })
  }

  render() {
    const { organization, image, open } = this.state
    const { isRegistering, errorMessage } = this.props
    return (
      <div>
        <Form loading={isRegistering}>
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
          <Button content="등록" onClick={this.handleClick} />
          <Modal dimmer="inverted" open={open} onClose={this.handleClose}>
            <Modal.Header content="교육기관 등록" />
            <Modal.Content content="교육기관으로 등록하시겠습니까?" />
            <Modal.Actions>
              <Button content="취소" onClick={this.handleClose} />
              <Button content="등록" onClick={this.handleSubmit} />
            </Modal.Actions>
          </Modal>
        </Form>
        {
          errorMessage && (
            <Message negative>
              <Message.Header>교육기관 등록에 실패하였습니다.</Message.Header>
              <p>{errorMessage}</p>
            </Message>
          )
        }
      </div>
    )
  }
}
