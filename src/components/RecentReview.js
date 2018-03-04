import React from 'react'
import { Comment } from 'semantic-ui-react'
import styled from 'styled-components'

const Name = styled(Comment.Author)`
  display: inline-block !important;
`

const CommentText = styled(Comment.Text)`
  margin-bottom: 0 !important;
`

const RecentReview = ({
  review: {
    content,
    createdAt,
    displayName,
    photoURL,
  },
}) => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src={photoURL} />
      <Comment.Content>
        <Name>{displayName}</Name>
        <Comment.Metadata>
          <div>{createdAt}</div>
        </Comment.Metadata>
        <CommentText>{content}</CommentText>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default RecentReview
