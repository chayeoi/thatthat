import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Segment,
  Rating,
} from 'semantic-ui-react'
import { RecentReview } from 'components'
import * as color from '../constants/color'
import * as font from '../constants/font'

const Wrapper = styled(Segment.Group)`
  margin: 0 0 .7rem !important;
  border: none !important;
`

const ImageGrid = styled(Grid.Column)`
  padding-right: 0 !important;
`

const SquareImageBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
`

const CourseImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const InfoGrid = styled(Grid.Column)`
  position: static !important;
  padding-left: 1.5rem !important;
`

const OrganizationName = styled.h4`
  color: ${font.SUB_TITLE.color};
  font-size: ${font.SUB_TITLE.size};
  font-weight: ${font.SUB_TITLE.weight};
`

const CourseName = styled.h3`
  color: ${font.TITLE.color};
  font-size: ${font.TITLE.size};
  font-weight: ${font.TITLE.weight};
`

const LikeCount = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 12px;
  color: ${color.GRAY5};
`

const UserFeedbackBox = styled.div`
  position: relative;
  margin-top: 5px;
`

const ReviewCount = styled.div`
  display: inline-block;
  color: ${color.MAIN_COLOR};
  font-weight: bold;
  font-size: 12px;
  padding-right: 10px;
`

const CourseRating = styled(Rating)`
  bottom: 0;
  position: absolute;
`

const CourseCard = ({ course, userClass, render }) => {
  const {
    courseKey,
    organization,
    courseName,
    likeCount,
    reviewCount,
    ratingAvg,
    downloadURL,
    recentReview,
    myLike,
  } = course
  return (
    <Wrapper as="li" className="cardshadow">
      <Segment>
        <Grid as={Link} to={`/course/${courseKey}/info`}>
          <ImageGrid width={4}>
            <SquareImageBox>
              <CourseImage src={downloadURL} alt={courseName} />
            </SquareImageBox>
          </ImageGrid>
          <InfoGrid width={12} verticalAlign="middle">
            <OrganizationName>{organization}</OrganizationName>
            <CourseName>{courseName}</CourseName>
            <UserFeedbackBox>
              <ReviewCount>리뷰 {reviewCount}</ReviewCount>
              <CourseRating defaultRating={ratingAvg} maxRating={5} disabled />
            </UserFeedbackBox>
          </InfoGrid>
        </Grid>
      </Segment>
      {userClass === 'reviewer' && render({ courseKey, likeCount, myLike })}
      <Segment>
        {recentReview ?
          <RecentReview review={recentReview} />
          : <React.Fragment>등록된 리뷰가 없습니다.</React.Fragment>
        }
      </Segment>
    </Wrapper>
  )
}

export default CourseCard
