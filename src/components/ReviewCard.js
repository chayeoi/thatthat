import React from 'react'

const ReviewCard = ({
  content,
  createdAt,
  displayName,
  photoURL,
  rating,
  uid,
}) => (
  <li>
    <div>{content}</div>
    <div>{createdAt}</div>
    <div>{displayName}</div>
    <img src={photoURL} alt="유저 사진" />
    <div>{rating}</div>
  </li>
)

export default ReviewCard
