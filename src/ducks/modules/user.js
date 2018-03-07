import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'user/IS_LOADING'
export const AUTHENTICATE_AS_REVIEWER = 'user/AUTHENTICATE_AS_REVIEWER'
export const AUTHENTICATE_AS_ACADEMY = 'user/AUTHENTICATE_AS_ACADEMY'
export const REDIRECT_TO_LOGIN = 'user/REDIRECT_TO_LOGIN'
export const INITIALIZE_USER = 'user/INITIALIZE_USER'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const authenticateAsReviewer = () => ({
  type: AUTHENTICATE_AS_REVIEWER,
})
export const authenticateAsAcademy = () => ({
  type: AUTHENTICATE_AS_ACADEMY,
})
export const redirectToLogin = () => ({
  type: REDIRECT_TO_LOGIN,
})
export const initializeUser = () => ({
  type: INITIALIZE_USER,
})

// Reducer
const initialState = {
  isLoading: false,
  redirectToLogin: false,
  userClass: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: true,
        redirectToLogin: false,
      }
    case AUTHENTICATE_AS_REVIEWER:
      return {
        ...state,
        isLoading: false,
        userClass: 'reviewer',
      }
    case AUTHENTICATE_AS_ACADEMY:
      return {
        ...state,
        isLoading: false,
        userClass: 'academy',
      }
    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        isLoading: false,
        redirectToLogin: true,
      }
    case INITIALIZE_USER:
      return initialState
    default:
      return state
  }
}

// Thunks
export const requestAuthentication = () => async (dispatch) => {
  dispatch(isLoading())
  const { currentUser } = firebase.auth()
  if (currentUser) {
    const reviewerPromise = firebase.database().ref(`users/reviewers/${currentUser.uid}`).once('value')
    const academyPromise = firebase.database().ref(`users/reviewers/${currentUser.uid}`).once('value')
    const [
      reviewerSnapshot,
      academySnapshot,
    ] = await Promise.all([
      reviewerPromise,
      academyPromise,
    ])
    const reviewer = reviewerSnapshot.val()
    const academy = academySnapshot.val()
    if (reviewer) {
      dispatch(authenticateAsReviewer())
    } else if (academy) {
      dispatch(authenticateAsAcademy())
    } else {
      dispatch(authenticateAsReviewer())
    }
  } else {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      unsubscribe()
      if (user) {
        const snapshot = await firebase.database().ref(`users/reviewers/${user.uid}`).once('value')
        const reviewer = snapshot.val()
        if (reviewer) {
          dispatch(authenticateAsReviewer())
        } else {
          dispatch(authenticateAsAcademy())
        }
      } else {
        dispatch(redirectToLogin())
      }
    })
  }
}
