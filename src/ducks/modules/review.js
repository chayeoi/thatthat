import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'review/IS_LOADING'
export const COMPLETE_LOADING = 'review/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = reviews => ({
  type: COMPLETE_LOADING,
  reviews,
})

// Reducer
const initialState = {
  isLoading: false,
  reviews: [],
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
        reviews: action.reviews,
      }
    default:
      return state
  }
}

// Thunks
export const loadMyReviewList = () => async (dispatch) => {
  dispatch(isLoading())
  const { uid } = firebase.auth().currentUser
  const snapshot = await firebase.database().ref(`myReviews/${uid}`).once('value')
  const result = snapshot.val()
  if (result) {
    const reviewKeys = Object.keys(result)
    const pendingReviews = reviewKeys.map(async (reviewKey) => {
      const reviewSnapshot = await firebase.database().ref(`reviews/${reviewKey}`).once('value')
      const review = reviewSnapshot.val()
      const { courseKey } = review
      const categorySnapshot = await firebase.database().ref(`category/${courseKey}`).once('value')
      const category = categorySnapshot.val()
      const courseSnapshot = await firebase.database().ref(`courses/${category}/${courseKey}`).once('value')
      const course = courseSnapshot.val()
      const { organization, courseName } = course
      return {
        reviewKey,
        organization,
        courseName,
        ...review,
      }
    })
    const reviews = await Promise.all(pendingReviews)
    dispatch(completeLoading(reviews))
  } else {
    dispatch(completeLoading(null))
  }
}
