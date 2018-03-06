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
      const courseSnapshot = await firebase.database().ref(`courses/${category}/${courseKey}`).once('value')
      const course = courseSnapshot.val()
      return {
        courseKey,
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
