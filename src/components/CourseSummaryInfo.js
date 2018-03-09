import React from 'react'
import styled from 'styled-components'
import {
  Rating,
} from 'semantic-ui-react'
import { MAIN_COLOR, DEEPER_GRAY } from 'constants/color'
import { TITLE } from 'constants/font'

const Wrapper = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #fff;
  `
const CenterBox = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
`
const ImageGrid = styled.div`
  width: 25%;
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

const InfoGrid = styled.div`
  width: 75%;
  display: flex;
  padding-left: 1.5rem;
  flex-direction: column;
  justify-content: center;
`

const OrganizationName = styled.h4`
  color: ${DEEPER_GRAY};
  font-size: 13px;
  font-weight: bold;
`

const CourseName = styled.h3`
  color: ${TITLE.color};
  font-size: ${TITLE.size};
  font-weight: ${TITLE.weight};
  line-height: 2.5rem;
`

const ReviewCount = styled.div`
  display: inline-block;
  color: ${MAIN_COLOR};
  font-weight: bold;
  font-size: 12px;
  padding-right: 10px;
`

const CourseSummaryInfo = ({ course }) => {
  const {
    organization,
    courseName,
    reviewCount,
    ratingAvg,
    downloadURL,
  } = course
  return (
    <Wrapper className="Wrapper">
      <CenterBox>
        <ImageGrid className="imagebox">
          <SquareImageBox>
            <CourseImage src={downloadURL} size="small" alt={`${courseName} 대표 이미지`} />
          </SquareImageBox>
        </ImageGrid>
        <InfoGrid className="infobox">
          <OrganizationName>{organization}</OrganizationName>
          <CourseName>{courseName}</CourseName>
          <div>
            <ReviewCount>리뷰 {reviewCount}</ReviewCount>
            <Rating rating={ratingAvg} maxRating={5} disabled />
          </div>
        </InfoGrid>
      </CenterBox>
    </Wrapper>
  )
}

export default CourseSummaryInfo
