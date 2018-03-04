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
} from 'semantic-ui-react'

const StyledRating = styled(Rating)`
  &.active::before {
    color: #f8ba00;
  }
`

const CourseSummaryInfo = ({ course }) => {
  const {
    courseKey,
    organization,
    courseName,
    likeCount,
    reviewCount,
    ratingAvg,
    downloadURL,
    userClass,
  } = course
  return (
    <Segment as="li">
      <Grid as={Link} to={`/course/${courseKey}/info`}>
        <Grid.Column width={4} color="blue" textAlign="center">
          <Image src={downloadURL} size="small" />
        </Grid.Column>
        <Grid.Column width={12} color="green">
          <Header sub content={organization} size="huge" />
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
          {/* 유저 인증 등급 hocs 완성 후 사용할 코드 */}
          {/* {userClass === 'reviewer' ?
            <LikeCount>{likeCount} <LikeButton /></LikeCount> :
            <LikeCount>{likeCount} <LikeIcon name="empty heart" /></LikeCount>
          } */}
      </Grid>
    </Segment>
  )
}

export default CourseSummaryInfo
