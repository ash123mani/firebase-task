import { Redirect } from 'react-router-dom'
import FirebaseUtils from '../../utils/FirebaseUtils'

import { AUTH_ACTION } from './types'
import { setError, setLoading } from './appActions'

export const signUp = (newUser) => {
  console.log('new User is', newUser)
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(setLoading(true))

    FirebaseUtils.createFirebaseUser(getFirebase, getFirestore, newUser)
      .then((response) => {
        dispatch(setLoading(false))
      })
      .catch((error) => {
        dispatch(setLoading(false))
        dispatch(setError(true))
      })
  }
}

export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(setLoading(true))

    FirebaseUtils.signInUser(getFirebase, credentials)
      .then((response) => {
        console.log('response after signing in the user is', response)
        dispatch(setLoading(false))
        // dispatch(setUserloggedIn())
      }) 
      .catch((error) => {
        dispatch(setLoading(false))
        dispatch(setError(true))
      })
  } 
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(setLoading(true))

    FirebaseUtils.signOutUser(getFirebase)
      .then((response) => {
        dispatch(setLoading(false))
      })
      .catch((error) => {
        dispatch(setLoading(false))
        dispatch(setError(true))
      })
  }
}

export const authAction = (authAction) => {
  return {
    type: AUTH_ACTION,
    payload: authAction
  }
}

// export const setUserloggedIn = _ => {
//   return (dispatch, getState) => {
//     console.log('called', getState())
//     dispatch({
//       type: USER_LOGIN,
//       payload: getState().firebase.auth.uid ? true : false
//     })
//   }
// }