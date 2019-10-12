import { USER_LOGIN } from '../actions/types'

const initialState = {
  isUserLoggedIn: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLoggedIn: action.payload
      }
    default:
      return state
  }
}


export default authReducer