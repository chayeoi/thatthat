import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'review/IS_LOADING'
export const COMPLETE_LOADING = 'review/COMPLETE_LOADING'
export const IS_CREATING = 'review/IS_CREATING'
export const IS_COMPLETED = 'review/IS_COMPLETED'
export const ERROR_OCCURED = 'review/ERROR_OCCURED'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = (reviews, currentUserId) => ({
  type: COMPLETE_LOADING,
  reviews,
  currentUserId,
})
export const isCreating = () => ({
  type: IS_CREATING,
})
export const isCompleted = () => ({
  type: IS_COMPLETED,
})
export const errorOccured = errorMessage => ({
  type: ERROR_OCCURED,
  errorMessage,
})

// Reducer
const initialState = {
  isLoading: false,
  reviews: [],
  currentUserId: null,
  isCreating: false,
  isCompleted: false,
  errorMessage: '',
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
        currentUserId: action.currentUserId,
      }
    case IS_CREATING:
      return {
        ...state,
        isCreating: true,
      }
    case IS_COMPLETED:
      return {
        ...state,
        isCreating: false,
        isCompleted: true,
      }
    case ERROR_OCCURED:
      return {
        ...state,
        isCreating: false,
        errorMessage: action.errorMessage,
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
    const { uid } = firebase.auth().currentUser
    const reviews = await Promise.all(pendingReviews)
    dispatch(completeLoading(reviews, uid))
  } else {
    const { uid } = firebase.auth().currentUser
    dispatch(completeLoading(null, uid))
  }
}
export const createReview = (input, courseKey) => async (dispatch) => {
  dispatch(isCreating())
  try {
    const auth = firebase.auth()
    const database = firebase.database()
    const { uid } = auth.currentUser
    const categorySnapshot = await database.ref(`category/${courseKey}`).once('value')
    const category = categorySnapshot.val()
    const reviewPromise = database.ref('reviews').push({
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      uid,
      courseKey,
      ...input,
    })
    const myReviewRef = `myReviews/${uid}/${reviewPromise.key}`
    const reviewInfoRef = `reviewInfo/${courseKey}/${reviewPromise.key}`
    const courseRef = `courses/${category}/${courseKey}`
    const myReviewPromise = database.ref(myReviewRef).set(true)
    const reviewInfoPromise = database.ref(reviewInfoRef).set(uid)
    const coursePromise = database.ref(courseRef).transaction((course) => {
      if (course) {
        const { reviewCount, ratingAvg } = course
        return {
          ...course,
          reviewCount: reviewCount + 1,
          ratingAvg: ((ratingAvg * reviewCount) + input.rating) / (reviewCount + 1),
        }
      }
      return course
    })
    await Promise.all([
      reviewPromise,
      myReviewPromise,
      reviewInfoPromise,
      coursePromise,
    ])
    dispatch(isCompleted())
  } catch (e) {
    dispatch(errorOccured('알 수 없는 에러가 발생했습니다.'))
  }
}
