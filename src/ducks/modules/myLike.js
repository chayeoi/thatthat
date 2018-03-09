import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'myLike/IS_LOADING'
export const COMPLETE_LOADING = 'myLike/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = likes => ({
  type: COMPLETE_LOADING,
  likes,
})

// Reducer
const initialState = {
  isLoading: false,
  likes: [],
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
        likes: action.likes,
      }
    default:
      return state
  }
}

// Thunks
export const loadMyLikeList = () => async (dispatch) => {
  dispatch(isLoading())
  const { uid } = firebase.auth().currentUser
  const snapshot = await firebase.database().ref(`myLikes/${uid}`).once('value')
  const result = snapshot.val()
  if (result) {
    const courseKeys = Object.keys(result)
    const pendingLikes = courseKeys.map(async (courseKey) => {
      const categorySnapshot = await firebase.database().ref(`category/${courseKey}`).once('value')
      const category = categorySnapshot.val()
      const courseRef = firebase.database().ref(`courses/${category}/${courseKey}`)
      const coursePromise = courseRef.once('value')
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
    const unsortedLikes = await Promise.all(pendingLikes)
    const likes = unsortedLikes.reverse()
    dispatch(completeLoading(likes))
  } else {
    dispatch(completeLoading(null))
  }
}
