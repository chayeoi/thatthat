import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #fff;
`

const Footer = ({ url }) => (
  <footer>
    <ContentWrapper>
      <StyledLink to={url}>
        THATTHAT 소개
      </StyledLink>
    </ContentWrapper>
  </footer>
)

export default Footer
