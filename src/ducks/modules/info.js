import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'info/IS_LOADING'
export const COMPLETE_LOADING = 'info/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = content => ({
  type: COMPLETE_LOADING,
  content,
})

// Reducer
const initialState = {
  isLoading: false,
  content: '',
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
        content: action.content,
      }
    default:
      return state
  }
}

// Thunks
export const loadCourseInfo = courseKey => async (dispatch) => {
  dispatch(isLoading())
  const snapshot = await firebase.database().ref(`courseInfo/${courseKey}`).once('value')
  const content = snapshot.val()
  dispatch(completeLoading(content))
}
