import * as firebase from 'firebase'

const processCourseData = async (rawCourses) => {
  const pendingCourses = Object.entries(rawCourses).map(async ([courseKey, course]) => {
    const recentReviewInfoSnapshot = await firebase.database().ref(`reviewInfo/${courseKey}`).limitToLast(1).once('value')
    const recentReviewInfo = recentReviewInfoSnapshot.val()
    let recentReview = null
    if (recentReviewInfo) {
      const [[recentReviewKey, uid]] = Object.entries(recentReviewInfo)
      const recentReviewPromise = firebase.database().ref(`reviews/${recentReviewKey}`).once('value')
      const reviewerPromise = firebase.database().ref(`users/reviewers/${uid}`).once('value')
      const [
        recentReviewSnapshot,
        reviewerSnapshot,
      ] = await Promise.all([
        recentReviewPromise,
        reviewerPromise,
      ])
      recentReview = {
        ...recentReviewSnapshot.val(),
        ...reviewerSnapshot.val(),
      }
    }
    return {
      courseKey,
      recentReview,
      ...course,
    }
  })
  const courses = await Promise.all(pendingCourses)
  return courses
}

export default processCourseData
