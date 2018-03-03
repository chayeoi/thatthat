import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Segment,
  Image,
  Header,
  Rating,
  Statistic,
  Comment,
} from 'semantic-ui-react'
import { RecentReview, LikeButton } from 'components'
import { courseImg } from '../assets/images'

const StyledRating = styled(Rating)`
  &.active::before {
    color: #f8ba00;
  }
`

const CourseCard = ({ course }) => {
  const {
    courseKey,
    organization,
    courseName,
    likeCount,
    reviewCount,
    ratingAvg,
  } = course
  return (
    <Segment.Group as="li">
      <Segment>
        <Grid as={Link} to={`/course/${courseKey}/info`}>
          <Grid.Column width={4} textAlign="center" color="blue">
            <Image src={courseImg} size="medium" />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as="h4" sub content={organization} size="large" color="grey" />
            <Header as="h3" content={courseName} />
            <StyledRating defaultRating={ratingAvg} maxRating={5} disabled />
            <Statistic size="mini">
              <Statistic.Label content="리뷰 갯수" />
              <Statistic.Value content={reviewCount} />
            </Statistic>
            <Statistic size="mini">
              <Statistic.Label content="좋아요 갯수" />
              <Statistic.Value content={likeCount} />
            </Statistic>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment>
        <Comment.Group>
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>This has been very useful for my research.</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        <RecentReview />
      </Segment>
    </Segment.Group>
  )
}

export default CourseCard
