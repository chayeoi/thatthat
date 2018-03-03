import React from 'react'
import { Comment } from 'semantic-ui-react'
import styled from 'styled-components'

const Name = styled(Comment.Author)`
  display: inline-block !important;
`

const CommentText = styled(Comment.Text)`
  margin-bottom: 0 !important;
`

const RecentReview = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src="https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg" />
      <Comment.Content>
        <Name>Matt</Name>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <CommentText>This has been very useful for my research.</CommentText>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default RecentReview
