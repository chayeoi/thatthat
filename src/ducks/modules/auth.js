import * as firebase from 'firebase'

const saveProfile = async () => {
  const { uid } = firebase.auth().currentUser
  const database = firebase.database()
  const pendingReviewer = database.ref(`users/reviewers/${uid}`).once('value')
  const pendingAcademy = database.ref(`users/academies/${uid}`).once('value')
  const [
    reviewerSnapshot,
    academySnapshot,
  ] = await Promise.all([
    pendingReviewer,
    pendingAcademy,
  ])
  const reviewer = reviewerSnapshot.val()
  const academy = academySnapshot.val()
  if (!(reviewer || academy)) {
    const { displayName, photoURL } = firebase.auth().currentUser
    database.ref(`users/reviewers/${uid}`).set({
      displayName,
      photoURL,
    })
  }
}

// Actions
const REDIRECT_TO_MAIN = 'auth/REDIRECT_TO_MAIN'
const REDIRECT_TO_LOGIN = 'auth/REDIRECT_TO_LOGIN'

// Action Creators
export const redirectToMain = () => ({
  type: REDIRECT_TO_MAIN,
})
export const redirectToLogin = () => ({
  type: REDIRECT_TO_LOGIN,
})

// Reducer
const initialState = {
  redirectToMain: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_TO_MAIN:
      return {
        redirectToMain: true,
      }
    case REDIRECT_TO_LOGIN:
      return {
        redirectToLogin: true,
      }
    default:
      return state
  }
}

// Thunks
export const loginWithFacebook = () => async (dispatch) => {
  const provider = new firebase.auth.FacebookAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  saveProfile()
  dispatch(redirectToMain())
}
export const loginWithTwitter = () => async (dispatch) => {
  const provider = new firebase.auth.TwitterAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  saveProfile()
  dispatch(redirectToMain())
}
export const loginWithGoogle = () => async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  saveProfile()
  dispatch(redirectToMain())
}
export const logout = () => async (dispatch) => {
  await firebase.auth().signOut()
  dispatch(redirectToLogin())
}
