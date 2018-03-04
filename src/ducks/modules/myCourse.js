import * as firebase from 'firebase'

// Actions
export const IS_LOADING = 'myCourse/IS_LOADING'
export const COMPLETE_LOADING = 'myCourse/COMPLETE_LOADING'

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
  courses: [],
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
        courses: action.courses,
      }
    default:
      return state
  }
}

// Thunks
export const loadMyCourseList = () => async (dispatch) => {
  dispatch(isLoading())
  const { uid } = firebase.auth().currentUser
  const snapshot = await firebase.database().ref(`myCourses/${uid}`).once('value')
  const result = snapshot.val()
  if (result) {
    const courseKeys = Object.keys(result)
    const pendingCourses = courseKeys.map(async (courseKey) => {
      const categoryRef = firebase.database().ref(`category/${courseKey}`)
      const categorySnapshot = await categoryRef.once('value')
      const category = categorySnapshot.val()
      const courseRef = firebase.database().ref(`courses/${category}/${courseKey}`)
      const courseSnapshot = await courseRef.orderByChild('createdAt').once('value')
      const course = courseSnapshot.val()
      return {
        courseKey,
        ...course,
      }
    })
    const ascendingCourses = await Promise.all(pendingCourses)
    const courses = ascendingCourses.reverse()
    dispatch(completeLoading(courses))
  } else {
    dispatch(completeLoading(null))
  }
}
