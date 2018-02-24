import React from 'react'
import { Segment } from 'semantic-ui-react'

const ReviewCard = ({ review }) => {
  const {
    reviewKey,
    organization,
    className,
    uid,
    courseKey,
    rating,
    content,
  } = review
  return (
    <Segment as="li">
      <div>{reviewKey}</div>
      <div>{organization}</div>
      <div>{className}</div>
      <div>{uid}</div>
      <div>{courseKey}</div>
      <div>{rating}</div>
      <div>{content}</div>
    </Segment>
  )
}

export default ReviewCard
