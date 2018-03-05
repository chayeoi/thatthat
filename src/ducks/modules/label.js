import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'label/IS_LOADING'
export const COMPLETE_LOADING = 'label/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = isPending => ({
  type: COMPLETE_LOADING,
  isPending,
})

// Reducer
const initialState = {
  isLoading: false,
  isPending: false,
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
        isPending: action.isPending,
      }
    default:
      return state
  }
}

// Thunks
export const checkRegisteringReq = () => async (dispatch) => {
  dispatch(isLoading())
  const { uid } = firebase.auth().currentUser
  const snapshot = await firebase.database().ref(`registeringReq/${uid}`).once('value')
  const registeringReq = snapshot.val()
  if (registeringReq) {
    dispatch(completeLoading(true))
  } else {
    dispatch(completeLoading(false))
  }
}
