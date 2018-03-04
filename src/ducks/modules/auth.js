import * as firebase from 'firebase'
import { saveProfile } from 'utils'

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
  redirectToLogin: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REDIRECT_TO_MAIN:
      return {
        ...state,
        redirectToMain: true,
        redirectToLogin: false,
      }
    case REDIRECT_TO_LOGIN:
      return {
        ...state,
        redirectToMain: false,
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
