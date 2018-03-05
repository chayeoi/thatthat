import React from 'react'
import styled from 'styled-components'
import { Segment } from 'semantic-ui-react'

const MyReviewCard = ({ review }) => {
  const {
    uid,
    reviewKey,
    rating,
    content,
    courseKey,
    organization,
    courseName,
    createdAt,
  } = review
  return (
    <Segment as="li">
      <div>{courseKey}</div>
      <div>{organization}</div>
      <div>{courseName}</div>
      <div>{uid}</div>
      <div>{reviewKey}</div>
      <div>{createdAt}</div>
      <div>{rating}</div>
      <div>{content}</div>
    </Segment>
  )
}

export default MyReviewCard
