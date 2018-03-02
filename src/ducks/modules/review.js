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
export const loadCourseReview = courseKey => async (dispatch) => {
  dispatch(isLoading())
  const snapshot = await firebase.database().ref(`reviewInfo/${courseKey}`).once('value')
  const result = snapshot.val()
  if (result) {
    const reviewInfos = Object.entries(result)
    const pendingReviews = reviewInfos.map(async ([reviewKey, uid]) => {
      const reviewPromise = firebase.database().ref(`reviews/${reviewKey}`).once('value')
      const userPromise = firebase.database().ref(`users/reviewers/${uid}`).once('value')
      const [reviewSnapshot, userSnapshot] = await Promise.all([reviewPromise, userPromise])
      const review = reviewSnapshot.val()
      const user = userSnapshot.val()
      return {
        reviewKey,
        ...review,
        ...user,
      }
    })
    const reviews = await Promise.all(pendingReviews)
    dispatch(completeLoading(reviews))
  } else {
    dispatch(completeLoading(null))
  }
}
