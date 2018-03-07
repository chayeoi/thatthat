import React from 'react'
import styled from 'styled-components'

const ContentWrapper = styled.div`
  margin-top: 5rem;
  font-size: 1.2rem;
  font-weight: 100;
  text-align: center;
  color: #fff;
`

const Footer = ({ courseCount }) => (
  <footer>
    <ContentWrapper>
      <p>프로그래밍, 디자인, 마케팅, 영상</p>
      <p>{courseCount}개의 강의가 당신을 기다리고 있습니다.</p>
      <p>당신의 재능을 찾아보세요!</p>
    </ContentWrapper>
  </footer>
)

export default Footer
