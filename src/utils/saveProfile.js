import * as firebase from 'firebase'

const saveProfile = async () => {
  const { uid } = firebase.auth().currentUser
  const database = firebase.database()
  const pendingReviewer = database.ref(`users/reviewers/${uid}`).once('value')
  const pendingAcademy = database.ref(`users/academies/${uid}`).once('value')
  const [
    reviewerSnapshot,
    academySnapshot,
  ] = await Promise.all([
    pendingReviewer,
    pendingAcademy,
  ])
  const reviewer = reviewerSnapshot.val()
  const academy = academySnapshot.val()
  if (!(reviewer || academy)) {
    const { displayName, photoURL } = firebase.auth().currentUser
    database.ref(`users/reviewers/${uid}`).set({
      displayName,
      photoURL,
    })
  }
}

export default saveProfile
