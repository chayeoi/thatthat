import React from 'react'

const ReviewCard = ({
  reviewKey,
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
    {render(uid, reviewKey, rating)}
  </li>
)

export default ReviewCard
