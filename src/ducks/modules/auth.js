import * as firebase from 'firebase'

// Actions
export const REDIRECT_TO_MAIN = 'auth/REDIRECT_TO_MAIN'
export const LOGOUT = 'auth/LOGOUT'

// Action Creators
export const redirectToMain = () => ({
  type: REDIRECT_TO_MAIN,
})
export const logout = () => ({
  type: LOGOUT,
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
    default:
      return state
  }
}

// Thunk
// XXX: REDIRECT_TO_MAIN 액션을 dispatch했음에도 LoginButtonContainer가 다시 렌더링되지 않는 문제
export const loginWithFacebook = () => async (dispatch) => {
  const provider = new firebase.auth.FacebookAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  dispatch(redirectToMain())
}
export const loginWithTwitter = () => async (dispatch) => {
  const provider = new firebase.auth.TwitterAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  dispatch(redirectToMain())
}
export const loginWithGoogle = () => async (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()
  await firebase.auth().signInWithPopup(provider)
  dispatch(redirectToMain())
}
