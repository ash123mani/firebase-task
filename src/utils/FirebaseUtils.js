import uuidv1 from 'uuid/v1'

import DateUtils from './DateUtils'

export default {

  createFirebaseUser(getFirebase, getFirestore, newUser) {
    return new Promise((resolve, reject) => {
      const firebase = getFirebase()
      const firestore = getFirestore()

      firebase.auth()
        .createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        )
        .then((response) => {
          console.log('response after creating user in firebase', response)
          return firestore.collection('users')
            .doc(response.user.uid)
            .set({
              firstName: newUser.firstName,
              lastName: newUser.lastName,
              email: newUser.email,
              password: newUser.password
            })
        })
        .then((dbResponse) => {
          resolve(dbResponse)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  signInUser(getFirebase, credentials) {
    return new Promise((resolve, reject) => {
      const firebase = getFirebase()

      firebase.auth()
        .signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        )
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  signOutUser(getFirebase) {
    console.log('hi11')
    return new Promise((resolve, reject) => {
      const firebase = getFirebase()
      console.log('hi22')

      firebase.auth()
        .signOut()
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          console.log('hi33')
          reject(error)
        })
    })
  },

  createFireBaseTask(taskData, uid, getFirebase, getFirestore) {
    return new Promise((resolve, reject) => {
      const finalTaskData = {
        ...taskData,
        createdOn: new Date(),
        taskId: uuidv1()
      }
      const firestore = getFirestore()

      const todaysDate = DateUtils.todaysFullDate()

      firestore.collection('tasks').doc(uid)
        .collection('dailyTracker').doc(todaysDate)
        .set({
          dailyTasks: firestore.FieldValue.arrayUnion(finalTaskData),
          lastUpdated: new Date(),
        }, 
        { merge: true })
        .then((response) => {
          console.log('response after adding', response)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  
}