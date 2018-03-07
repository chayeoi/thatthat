import * as firebase from 'firebase'

// Actions
export const COMPLETE_COUNTING = 'footer/COMPLETE_COUNTING'

// Action Creators
export const completeCounting = courseCount => ({
  type: COMPLETE_COUNTING,
  courseCount,
})

// Reducer
const initialState = {
  courseCount: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case COMPLETE_COUNTING:
      return {
        courseCount: action.courseCount,
      }
    default:
      return state
  }
}

// Thunks
export const loadCourseCount = () => async (dispatch) => {
  const snapshot = await firebase.database().ref('courses').once('value')
  const result = snapshot.val()
  if (result) {
    const rawCourses = Object.values(result).reduce((acc, cur) => ({
      ...acc,
      ...cur,
    }), {})
    const courseCount = Object.keys(rawCourses).length
    dispatch(completeCounting(courseCount))
  } else {
    dispatch(completeCounting(0))
  }
}
