import React from 'react'
import styled from 'styled-components'
import { Comment } from 'semantic-ui-react'
import * as moment from 'moment'
import 'moment/locale/ko'

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
          {moment(createdAt).locale('ko').fromNow()}
        </Comment.Metadata>
        <CommentText>{content}</CommentText>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default RecentReview
