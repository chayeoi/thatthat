import React from 'react'

const ReviewButtonWrapper = ({ uid, render }) => (
  <div>
    {render(uid)}
  </div>
)

export default ReviewButtonWrapper
