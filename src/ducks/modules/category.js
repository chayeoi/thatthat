import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'category/IS_LOADING'
export const COMPLETE_LOADING = 'category/COMPLETE_LOADING'

// Action Creators
export const isLoading = () => ({
  type: IS_LOADING,
})
export const completeLoading = courses => ({
  type: COMPLETE_LOADING,
  courses,
})

// Reducer
const initialState = {
  isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: true,
      }
    case COMPLETE_LOADING:
      return {
        isLoading: false,
        courses: action.courses,
      }
    default:
      return state
  }
}

// Thunks
export const loadCourseList = category => async (dispatch) => {
  dispatch(isLoading())
  if (category) {
    const snapshot = await firebase.database().ref(`courses/${category}`).once('value')
    const result = snapshot.val()
    const courses = Object.entries(result).map(([id, course]) => ({
      id,
      ...course,
    }))
    dispatch(completeLoading(courses))
  } else {
    const snapshot = await firebase.database().ref('courses').once('value')
    const result = snapshot.val()
    const rawCourses = Object.values(result).reduce((acc, cur) => ({
      ...acc,
      ...cur,
    }), {})
    const courses = Object.entries(rawCourses).map(([courseKey, course]) => ({
      courseKey,
      ...course,
    }))
    dispatch(completeLoading(courses))
  }
}
