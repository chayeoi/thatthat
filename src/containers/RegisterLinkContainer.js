import React from 'react'
import { Link } from 'react-router-dom'
import { RegisterLink } from 'components'

const link = {
  as: Link,
  to: '/registering',
}

const RegisterLinkContainer = () => (
  <RegisterLink link={link} />
)

export default RegisterLinkContainer
