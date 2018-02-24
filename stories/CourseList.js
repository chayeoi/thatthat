import React from 'react'
import { storiesOf } from '@storybook/react'
import CourseList from '../src/components/CourseCard'

const courses = [
  {
    courseKey: 'course1',
    organization: '패스트캠퍼스',
    className: '웹 프론트엔드 스쿨',
    likeCount: 15,
    reviewCount: 21,
    ratingAvg: 3.5,
  },
  {
    courseKey: 'course2',
    organization: '에이콘 아카데미',
    className: '자바 웹 개발자 양성 과정',
    likeCount: 5,
    reviewCount: 13,
    ratingAvg: 3,
  },
  {
    courseKey: 'course3',
    organization: '멀티캠퍼스',
    className: '빅데이터 전문가 양성 과정',
    likeCount: 16,
    reviewCount: 17,
    ratingAvg: 4,
  },
  {
    courseKey: 'course4',
    organization: 'Remain',
    className: '웹 퍼블리싱 전문 교육',
    likeCount: 21,
    reviewCount: 8,
    ratingAvg: 4.2,
  },
  {
    courseKey: 'course5',
    organization: '패스트캠퍼스',
    className: '웹 서비스 기획 스쿨',
    likeCount: 13,
    reviewCount: 11,
    ratingAvg: 3.7,
  },
]

storiesOf('CourseList', module)
  .add('default', () => (
    <CourseList courses={courses} />
  ))
