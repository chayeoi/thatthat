import React from 'react'
import { ReviewButtonWrapper } from 'components'

const ReviewCard = ({
  content,
  createdAt,
  displayName,
  photoURL,
  rating,
  uid,
  render,
}) => (
  <li>
    <div>{content}</div>
    <div>{createdAt}</div>
    <div>{displayName}</div>
    <img src={photoURL} alt="유저 사진" />
    <div>{rating}</div>
    <ReviewButtonWrapper uid={uid} render={render} />
  </li>
)

export default ReviewCard
