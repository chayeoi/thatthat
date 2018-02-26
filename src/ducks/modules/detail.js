import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'detail/IS_LOADING'
export const COMPLETE_LOADING = 'detail/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = course => ({
  type: COMPLETE_LOADING,
  course,
})

// Reducer
const initialState = {
  isLoading: false,
  course: {},
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
        course: action.course,
      }
    default:
      return state
  }
}

// Thunks
export const loadCourse = courseKey => async (dispatch) => {
  dispatch(isLoading())
  const categorySnapshot = await firebase.database().ref(`category/${courseKey}`).once('value')
  const category = categorySnapshot.val()
  const courseSnapshot = await firebase.database().ref(`courses/${category}/${courseKey}`).once('value')
  const course = {
    courseKey,
    ...courseSnapshot.val(),
  }
  dispatch(completeLoading(course))
}
