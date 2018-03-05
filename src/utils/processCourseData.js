import * as firebase from 'firebase'

const processCourseData = async (rawCourses) => {
  const { uid } = firebase.auth().currentUser
  const pendingCourses = Object.entries(rawCourses).map(async ([courseKey, course]) => {
    const recentReviewInfoPromise = firebase.database().ref(`reviewInfo/${courseKey}`).limitToLast(1).once('value')
    const myLikePromise = firebase.database().ref(`myLikes/${uid}/${courseKey}`).once('value')
    const [
      recentReviewInfoSnapshot,
      myLikeSnapshot,
    ] = await Promise.all([
      recentReviewInfoPromise,
      myLikePromise,
    ])
    let myLike
    if (myLikeSnapshot.val()) {
      myLike = 1
    } else {
      myLike = 0
    }
    const recentReviewInfo = recentReviewInfoSnapshot.val()
    let recentReview = null
    if (recentReviewInfo) {
      const [[recentReviewKey, reviewerId]] = Object.entries(recentReviewInfo)
      const recentReviewPromise = firebase.database().ref(`reviews/${recentReviewKey}`).once('value')
      const reviewerPromise = firebase.database().ref(`users/reviewers/${reviewerId}`).once('value')
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
      myLike,
    }
  })
  const courses = await Promise.all(pendingCourses)
  return courses
}

export default processCourseData
