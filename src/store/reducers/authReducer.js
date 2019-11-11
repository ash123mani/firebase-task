import { USER_LOGIN, AUTH_ACTION } from "../actions/types";

const initialState = {
  isUserLoggedIn: false,
  authAction: "signIn"
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isUserLoggedIn: action.payload
      };
    case AUTH_ACTION:
      return {
        ...state,
        authAction: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
