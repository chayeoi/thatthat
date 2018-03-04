import * as firebase from 'firebase'

const processCourseData = async (rawCourses) => {
  const pendingCourses = Object.entries(rawCourses).map(async ([courseKey, course]) => {
    const recentReviewInfoSnapshot = await firebase.database().ref(`reviewInfo/${courseKey}`).limitToLast(1).once('value')
    const recentReviewInfo = recentReviewInfoSnapshot.val()
    let recentReview = null
    if (recentReviewInfo) {
      const [[recentReviewKey, uid]] = Object.entries(recentReviewInfo)
      const recentReviewPromise = firebase.database().ref(`reviews/${recentReviewKey}`).once('value')
      const reviewerPromise = firebase.database().ref(`users/reviewers/${uid}`).once('value')
      const [
        recentReviewSnapshot,
        reviewerSnapshot,
      ] = await Promise.all([
        recentReviewPromise,
        reviewerPromise,
      ])
      recentReview = {
        ...recentReviewSnapshot.val(),
        ...reviewerSnapshot.val(),
      }
    }
    return {
      courseKey,
      recentReview,
      ...course,
    }
  })
  const courses = await Promise.all(pendingCourses)
  return courses
}

// Actions
export const IS_LOADING = 'category/IS_LOADING'
export const COMPLETE_LOADING = 'category/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = courses => ({
  type: COMPLETE_LOADING,
  courses,
})

// Reducer
const initialState = {
  isLoading: false,
  courses: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case COMPLETE_LOADING:
      return {
        ...state,
        isLoading: false,
        courses: action.courses,
      }
    default:
      return state
  }
}

// Thunks
export const loadCourseList = category => async (dispatch) => {
  dispatch(isLoading())
  if (category) {
    const coursesSnapshot = await firebase.database().ref(`courses/${category}`).orderByChild('createdAt').once('value')
    const result = coursesSnapshot.val()
    if (result) {
      const unsortedCourses = await processCourseData(result)
      const courses = unsortedCourses.reverse()
      dispatch(completeLoading(courses))
    } else {
      dispatch(completeLoading(null))
    }
  } else {
    const snapshot = await firebase.database().ref('courses').once('value')
    const result = snapshot.val()
    if (result) {
      const rawCourses = Object.values(result).reduce((acc, cur) => ({
        ...acc,
        ...cur,
      }), {})
      const unsortedCourses = await processCourseData(rawCourses)
      const courses = unsortedCourses.sort((pre, cur) => cur.createdAt - pre.createdAt)
      dispatch(completeLoading(courses))
    } else {
      dispatch(completeLoading(null))
    }
  }
}
