import React from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import 'moment/locale/ko'
import styled from 'styled-components'
import { Segment, Comment, Rating } from 'semantic-ui-react'
import { TITLE, SUB_TITLE } from 'constants/font'

const Wrapper = styled(Segment)`
  padding: 1rem 1.5rem !important;
  margin: 0 0 .7rem !important;
`

const CourseName = styled.h3`
  color: ${TITLE.color};
  font-size: 18px;
  font-weight: ${TITLE.weight};
  display: inline-block;
  padding-right: 10px;
`

const OrganizationName = styled.h4`
  color: ${SUB_TITLE.color};
  font-size: ${SUB_TITLE.size};
  font-weight: ${SUB_TITLE.weight};
  display: inline-block;
`

const CommentBox = styled(Comment.Group)`
  max-width: 100% !important;
`

const CommentContent = styled(Comment)`
  margin: 0 !important;
  padding: 5px 0 0 !important;
`

const StyledRating = styled(Rating)`
  display: inline-block !important;
  margin-top: 5px;
  font-size: .7rem !important;
`

const CommentText = styled(Comment.Text)`
  margin-top: 8px !important;
  margin-bottom: 0 !important;
`

const MyReviewCard = ({ review }) => {
  const {
    rating,
    content,
    courseKey,
    organization,
    courseName,
    createdAt,
  } = review
  return (
    <Wrapper as="li">
      <CommentBox as={Link} to={`/course/${courseKey}/info`} title={`${courseName} 상세페이지로 이동`}>
        <CourseName>{courseName}</CourseName>
        <OrganizationName>{organization}</OrganizationName>
        <CommentContent>
          <StyledRating defaultRating={rating} maxRating={5} disabled />
          <Comment.Metadata>{moment(createdAt).locale('ko').fromNow()}</Comment.Metadata>
          <CommentText>{content}</CommentText>
        </CommentContent>
      </CommentBox>
    </Wrapper>
  )
}

export default MyReviewCard
