import * as firebase from 'firebase'

// Actions
export const IS_CREATING = 'form/IS_CREATING'
export const COMPLETE_CREATING = 'form/COMPLETE_CREATING'
export const ERROR_OCCURED = 'form/ERROR_OCCURED'
export const INITIALIZE_FORM = 'form/INITIALIZE_FORM'

// Action Creators
export const isCreating = () => ({
  type: IS_CREATING,
})
export const completeCreating = courseKey => ({
  type: COMPLETE_CREATING,
  courseKey,
})
export const errorOccured = errorMessage => ({
  type: ERROR_OCCURED,
  errorMessage,
})
export const initializeForm = () => ({
  type: INITIALIZE_FORM,
})

// Reducer
const initialState = {
  isCreating: false,
  completeCreating: false,
  courseKey: '',
  errorMessage: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_CREATING:
      return {
        ...state,
        isCreating: true,
      }
    case COMPLETE_CREATING:
      return {
        ...state,
        isCreating: false,
        completeCreating: true,
        courseKey: action.courseKey,
      }
    case ERROR_OCCURED:
      return {
        ...state,
        isCreating: false,
        errorMessage: action.errorMessage,
      }
    case INITIALIZE_FORM:
      return initialState
    default:
      return state
  }
}

// Thunks
export const createCourse = ({
  courseName,
  category,
  image,
  content,
}) => async (dispatch) => {
  if (!courseName) {
    dispatch(errorOccured('강의명을 입력해주세요.'))
  } else if (!category) {
    dispatch(errorOccured('카테고리를 선택해주세요.'))
  } else if (!(image instanceof File)) {
    dispatch(errorOccured('강의 사진을 등록해주세요.'))
  } else if (!content) {
    dispatch(errorOccured('강의 정보를 입력해주세요.'))
  } else {
    dispatch(isCreating())
    try {
      const { uid } = firebase.auth().currentUser
      const imagePromise = firebase.storage().ref(`courses/${uid}${Date.now()}`).put(image)
      const orgPromise = firebase.database().ref(`users/academies/${uid}/organization`).once('value')
      const [imageSnapshot, orgSnapshot] = await Promise.all([imagePromise, orgPromise])
      const organization = orgSnapshot.val()
      const coursePromise = firebase.database().ref(`courses/${category}`).push({
        organization,
        courseName,
        likeCount: 0,
        reviewCount: 0,
        ratingAvg: 0,
        downloadURL: imageSnapshot.downloadURL,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      })
      const contentPromise = firebase.database().ref(`courseInfo/${coursePromise.key}`).set(content)
      const categoryPromise = firebase.database().ref(`category/${coursePromise.key}`).set(category)
      const myCoursePromise = firebase.database().ref(`myCourses/${uid}/${coursePromise.key}`).set(true)
      await Promise.all([
        coursePromise,
        contentPromise,
        categoryPromise,
        myCoursePromise,
      ])
      dispatch(completeCreating(coursePromise.key))
    } catch (e) {
      dispatch(errorOccured('알 수 없는 에러가 발생했습니다.'))
    }
  }
}
