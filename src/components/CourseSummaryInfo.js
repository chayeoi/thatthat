import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Icon,
  Rating,
} from 'semantic-ui-react'
import { LikeButton } from 'components'
import * as color from '../constants/color'
import * as font from '../constants/font'

const Wrapper = styled.div`
  position: relative;
  padding: 1.5rem 1rem;
  min-height: 135px !important;
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
  color: ${color.GRAY6};
  font-size: 13px;
  font-weight: bold;
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
  font-size: 10px;
  color: ${color.GRAY5};
`

const LikeIcon = styled(Icon)`
  font-size: 14px !important;
  width: auto !important;
  margin: 0 !important;
`

const UserFeedbackBox = styled.div`
  margin-top: 5px;
`

const ReviewCount = styled.div`
  display: inline-block;
  color: ${color.MAIN_COLOR};
  font-weight: bold;
  font-size: 12px;
  padding-right: 10px;
`

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
    <Wrapper>
      <Grid>
        <ImageGrid width={4}>
          <SquareImageBox>
            <CourseImage src={downloadURL} size="small" alt={`${courseName} 대표 이미지`} />
          </SquareImageBox>
        </ImageGrid>
        <InfoGrid width={12} verticalAlign="middle">
          <OrganizationName>{organization}</OrganizationName>
          <CourseName>{courseName}</CourseName>
          <LikeButton likeCount={likeCount} />
          {/* 유저 인증 등급 hocs 완성 후 사용할 코드 */}
          {/* {userClass === 'reviewer' ?
            <LikeButton /> :
            <LikeCount title={`좋아요 ${likeCount}개`} >{likeCount} <LikeIcon name="empty heart" /></LikeCount>
          } */}
          <UserFeedbackBox>
            <ReviewCount>리뷰 {reviewCount}</ReviewCount>
            <StyledRating defaultRating={ratingAvg} maxRating={5} disabled />
          </UserFeedbackBox>
        </InfoGrid>
      </Grid>
    </Wrapper>
  )
}

export default CourseSummaryInfo
