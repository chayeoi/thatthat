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
import { courseImg } from '../assets/images'

const StyledRating = styled(Rating)`
  & .active::before {
    color: #f8ba00;
  }
`

const CourseCard = ({ course }) => {
  const {
    courseKey,
    organization,
    className,
    likeCount,
    reviewCount,
    ratingAvg,
  } = course
  return (
    <Segment as="li">
      <Grid as={Link} to={`/course/${courseKey}/info`}>
        <Grid.Column width={4} color="blue" textAlign="center">
          <Image src={courseImg} size="small" />
        </Grid.Column>
        <Grid.Column width={12} color="green">
          <Header sub content={organization} size="huge" />
          <Header as="h3" content={className} />
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
        <Comment.Group>
          <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/assets/images/avatar/small/matt.jpg' />
            <Comment.Content>
              <Comment.Author as='a'>Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>This has been very useful for my research.</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
  )
}

export default CourseCard
