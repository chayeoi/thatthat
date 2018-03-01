import * as firebase from 'firebase'

// Actions
export const IS_CREATING = 'form/IS_CREATING'
export const IS_COMPLETED = 'form/IS_COMPLETED'
export const ERROR_OCCURED = 'form/ERROR_OCCURED'

// Action Creators
export const isCreating = () => ({
  type: IS_CREATING,
})
export const isCompleted = courseKey => ({
  type: IS_COMPLETED,
  courseKey,
})
export const errorOccured = errorMessage => ({
  type: ERROR_OCCURED,
  errorMessage,
})

// Reducer
const initialState = {
  isCreating: false,
  isCompleted: false,
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
    case IS_COMPLETED:
      return {
        ...state,
        isCreating: false,
        isCompleted: true,
        courseKey: action.courseKey,
      }
    case ERROR_OCCURED:
      return {
        ...state,
        isCreating: false,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

// Thunks
export const registerCourse = ({
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
      dispatch(isCompleted(coursePromise.key))
    } catch (e) {
      dispatch(errorOccured('알 수 없는 에러가 발생했습니다.'))
    }
  }
}
