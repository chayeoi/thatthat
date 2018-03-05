import * as firebase from 'firebase'

// Actions
export const IS_REGISTERING = 'registering/IS_REGISTERING'
export const COMPLETE_REGISTERING = 'registering/COMPLETE_REGISTERING'
export const ERROR_OCCURED = 'registering/ERROR_OCCURED'
export const INITIALIZE_REGISTERING = 'registering/INITIALIZE_REGISTERING'

// Action Creators
export const isRegistering = () => ({
  type: IS_REGISTERING,
})
export const completeRegistering = () => ({
  type: COMPLETE_REGISTERING,
})
export const errorOccured = errorMessage => ({
  type: ERROR_OCCURED,
  errorMessage,
})
export const initializeRegistering = () => ({
  type: INITIALIZE_REGISTERING,
})

// Reducer
const initialState = {
  isRegistering: false,
  completeRegistering: false,
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_REGISTERING:
      return {
        ...state,
        isRegistering: true,
      }
    case COMPLETE_REGISTERING:
      return {
        ...state,
        isRegistering: false,
        completeRegistering: true,
      }
    case ERROR_OCCURED:
      return {
        ...state,
        isRegistering: false,
        errorMessage: action.errorMessage,
      }
    case INITIALIZE_REGISTERING:
      return initialState
    default:
      return state
  }
}

// Thunks
export const registerAsAcademy = ({ organization, image }) => async (dispatch) => {
  if (!organization) {
    dispatch(errorOccured('기관명을 입력해주세요.'))
  } else if (!(image instanceof File)) {
    dispatch(errorOccured('사업자 등록증을 첨부해주세요.'))
  } else {
    dispatch(isRegistering())
    try {
      const { uid } = firebase.auth().currentUser
      const imageSnapshot = await firebase.storage().ref(`registeringReq/${uid}${Date.now()}`).put(image)
      await firebase.database().ref(`registeringReq/${uid}`).set({
        organization,
        downloadURL: imageSnapshot.downloadURL,
      })
      dispatch(completeRegistering())
    } catch (e) {
      dispatch(errorOccured('알 수 없는 에러가 발생했습니다.'))
    }
  }
}
