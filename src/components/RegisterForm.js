import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Form,
  Modal,
  Message,
  Button,
} from 'semantic-ui-react'
import {
  MAIN_COLOR,
  LIGHTER_GRAY,
  GRAY,
  DEEPER_GRAY,
  LIGHT_BLACK,
} from 'constants/color'

const Wrapper = styled.div`
  padding: 2rem 1rem;
  min-height: 100vh;
  background-color: ${LIGHTER_GRAY};
`

const ManagerContact = styled.div`
  float: right;
  margin-top: 20px;
  font-weight: 700;
`

const CourseInput = styled(Form.Input)`
  margin-bottom: 12px;
  caret-color: ${MAIN_COLOR};
  & label {
    font-size: 13px;
    margin-bottom: 4px;
    color: #495057 !important;
  }
  & input {
    border-top: 1px solid ${GRAY} !important;
    border-left: 1px solid ${GRAY} !important;
    border-right: none !important;
    border-bottom: none !important;
  }
`

const FormButton = styled(Button)`
  width: 100%;
  margin-top: 10px !important;
  color: white !important;
  background-color: ${DEEPER_GRAY} !important;
  font-weight: 500 !important;
  &:hover {
    background-color: ${LIGHT_BLACK} !important;
  }
`

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
      <Wrapper>
        <Form loading={isRegistering}>
          <div>
            교육기관 회원 등급으로 전환하기 위해 교육기관명과 사업자 등록증을 첨부해주시면 검토후 24시간안에 담당자께 연락드리겠습니다.
          </div>
          <ManagerContact>홍지수 매니저 02-341-1512</ManagerContact>
          <CourseInput
            name="organization"
            value={organization}
            label="기관명"
            onChange={this.handleChange}
          />
          <CourseInput
            type="file"
            name="image"
            files={image}
            label="사업자 등록증"
            onChange={this.handleChange}
          />
          <FormButton content="교육기관 등록" onClick={this.handleClick} />
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
      </Wrapper>
    )
  }
}
