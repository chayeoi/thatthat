import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'myCourse/IS_LOADING'
export const COMPLETE_LOADING = 'myCourse/COMPLETE_LOADING'

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
export const loadMyCourseList = () => async (dispatch) => {
  dispatch(isLoading())
  const { uid } = firebase.auth().currentUser
  const snapshot = await firebase.database().ref(`myCourses/${uid}`).once('value')
  const result = snapshot.val()
  if (result) {
    const courseKeys = Object.keys(result)
    const pendingCourses = courseKeys.map(async (courseKey) => {
      const categoryRef = firebase.database().ref(`category/${courseKey}`)
      const categorySnapshot = await categoryRef.once('value')
      const category = categorySnapshot.val()
      const courseRef = firebase.database().ref(`courses/${category}/${courseKey}`)
      const coursePromise = courseRef.orderByChild('createdAt').once('value')
      const recentReviewInfoRef = firebase.database().ref(`reviewInfo/${courseKey}`)
      const recentReviewInfoPromise = recentReviewInfoRef.limitToLast(1).once('value')
      const [
        courseSnapshot,
        recentReviewInfoSnapshot,
      ] = await Promise.all([
        coursePromise,
        recentReviewInfoPromise,
      ])
      const course = courseSnapshot.val()
      const recentReviewInfo = recentReviewInfoSnapshot.val()
      let recentReview = null
      if (recentReviewInfo) {
        const [[recentReviewKey, reviewerId]] = Object.entries(recentReviewInfo)
        const recentReviewPromise = firebase.database().ref(`reviews/${recentReviewKey}`).once('value')
        const reviewerPromise = firebase.database().ref(`users/reviewers/${reviewerId}`).once('value')
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
    const ascendingCourses = await Promise.all(pendingCourses)
    const courses = ascendingCourses.reverse()
    dispatch(completeLoading(courses))
  } else {
    dispatch(completeLoading(null))
  }
}
